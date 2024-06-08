import { Orders } from "./order.entity";
export declare class Users {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    isAdmin: boolean;
    orders_id: Orders[];
}
