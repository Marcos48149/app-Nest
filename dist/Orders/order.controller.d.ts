import { Orders } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { OrderDto } from 'src/DTO/orderDTO';
export declare class OrderController {
    private readonly orderservice;
    constructor(orderservice: OrderService);
    getOrder(id: string): Promise<string | Orders>;
    addOrder(order: OrderDto): Promise<Orders[]>;
}
