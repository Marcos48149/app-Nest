import { UserDto } from "src/DTO/userDTO";
import { Users } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class UserRepository {
    private readonly UserRepository;
    constructor(UserRepository: Repository<Users>);
    getUser(page: any, limit: any): Promise<"no hay usuarios" | {
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
    createAdmin(id: any, user: any): Promise<string>;
    postUser(user: UserDto): Promise<{
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
    updateUser(id: string, user: any): Promise<{
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
    deleteUser(id: string): Promise<{
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
    getUserEmail(email: string): Promise<Users>;
}
