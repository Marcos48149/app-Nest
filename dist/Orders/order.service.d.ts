import { OrderRepository } from './order.repository';
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    addOrder(userId: string, product: any): Promise<import("../entities/order.entity").Orders[]>;
    getOrder(id: string): Promise<string | import("../entities/order.entity").Orders>;
}
