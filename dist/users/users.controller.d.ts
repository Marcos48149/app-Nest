import { UsersService } from './users.service';
import { UserDto } from 'src/DTO/userDTO';
export declare class UsersController {
    private readonly serviceUser;
    constructor(serviceUser: UsersService);
    getUser(page: number, limit: number): Promise<"no hay usuarios" | {
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
    getUserId(id: string): Promise<string | {
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
    createAdmin(id: string, user: Partial<UserDto>): Promise<string>;
    updateUser(id: number, datos: Partial<UserDto>): Promise<{
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
    deleteUser(id: number): Promise<{
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
