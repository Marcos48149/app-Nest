import { Products } from './product.entity';
import { Orders } from './order.entity';
export declare class OrderDetails {
    id: string;
    price: number;
    order: Orders;
    products: Products[];
}
