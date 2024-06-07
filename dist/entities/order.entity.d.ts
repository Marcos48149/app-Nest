import { Users } from './user.entity';
import { OrderDetails } from './orderDetails';
export declare class Orders {
    id: string;
    Date: Date;
    orderDetails: OrderDetails;
    user_id: Users;
}
