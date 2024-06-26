import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Orders } from "src/entities/order.entity";
import { OrderDetails } from "src/entities/orderDetails";
import { Products } from "src/entities/product.entity";
import { Users } from "src/entities/user.entity";
import { MoreThan, Repository } from "typeorm";


@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(Orders)
        private readonly orderRepository: Repository<Orders>,
        @InjectRepository(Products)
        private readonly productRepository: Repository<Products>,
        @InjectRepository(OrderDetails)
        private readonly detailsOrderRepository: Repository<OrderDetails>,
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>
    ) { }
    async addOrder(userId, product: any) {
        const Iduser = await this.userRepository.findOneBy({ id: userId })
        if (!Iduser) { throw new NotFoundException('usuario no encontrado') }

        let total = 0;

        const productArray = await Promise.all(
            product.map(async (elem) => {
                const products = await this.productRepository.findOneBy(
                    {
                        id: elem.id,
                        stock: MoreThan(0)
                    }
                )
                if (!products || undefined) { throw new NotFoundException(`producto con id: -> ${elem.id} <- no encontrado o sin stock`) }
                total += Number(products.price)

                //actualizo el stock
                await this.productRepository.update(
                    { id: elem.id },
                    { stock: products.stock - 1 }
                );
                return products;
            })
        )

        const order = new Orders()
        order.Date = new Date()
        order.user_id = userId
        const newOrder = await this.orderRepository.save(order)
        console.log(newOrder)


        const detailsOrder = new OrderDetails();
        detailsOrder.price = Number(Number(total).toFixed(2))
        detailsOrder.products = productArray;
        detailsOrder.order = newOrder;
        await this.detailsOrderRepository.save(detailsOrder);

        //enviamos al cliente la info de compra
        return await this.orderRepository.find(
            {
                where: { id: newOrder.id },
                relations: { orderDetails: true }
            }
        );

    }

    async getOrder(id: string) {
        const order = this.orderRepository.findOne({
            where: { id },
            relations: {

                orderDetails: { products: true },
            },
        });
        if (!order) {
            return `orden con id ${id} no encontrada`
        }

        return order;

    }

    async deleteOrder(id): Promise<string> {

        const order = await this.orderRepository.findOne({
            where: { id },
            relations: { orderDetails: { products: true } }
        });

        if (!order) {
            throw new Error('order no encontrada');
        }


        const productOrder = order.orderDetails.products;
        console.log(productOrder)


        const products = await this.productRepository.find();

        // Actualizar el stock de los productos
        const updateStockPromises = products.map(async (elem) => {
            const matchingProduct = productOrder.find(prod => prod.id === elem.id);
            if (matchingProduct) {
                await this.productRepository.update(
                    { id: elem.id },
                    { stock: elem.stock + 1 }
                );
            }
        });

        // Esperar a que todas las promesas de actualización de stock se completen
        await Promise.all(updateStockPromises);

        // Eliminar la orden y sus detalles
        await this.detailsOrderRepository.delete({ order: { id } });
        await this.orderRepository.delete(id);

        console.log(productOrder, 'final')
        return 'Order eliminada';
    }

}