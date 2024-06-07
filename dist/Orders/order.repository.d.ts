import { Orders } from "src/entities/order.entity";
import { OrderDetails } from "src/entities/orderDetails";
import { Products } from "src/entities/product.entity";
import { Users } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class OrderRepository {
    private readonly orderRepository;
    private readonly productRepository;
    private readonly detailsOrderRepository;
    private readonly userRepository;
    constructor(orderRepository: Repository<Orders>, productRepository: Repository<Products>, detailsOrderRepository: Repository<OrderDetails>, userRepository: Repository<Users>);
    addOrder(userId: any, product: any): Promise<Orders[]>;
    getOrder(id: string): Promise<string | Orders>;
}
