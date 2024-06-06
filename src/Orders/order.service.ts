import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Products } from 'src/entities/product.entity';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository){}

    async addOrder(userId:string, product:any){
        return await this.orderRepository.addOrder(userId,product)
    }

    async getOrder(id: string) {
        return this.orderRepository.getOrder(id);
    }
}
