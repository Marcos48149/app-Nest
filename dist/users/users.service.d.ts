import { UserRepository } from './user.repository';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: UserRepository);
    getUser(page: any, limi: any): Promise<"no hay usuarios" | {
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }[]>;
    getUserId(id: any): Promise<string | {
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }>;
    createAdmin(id: any, user: any): Promise<string>;
    postUser(user: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }>;
    updateUser(id: any, datos: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }>;
    deleteUser(id: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: string;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }>;
}
