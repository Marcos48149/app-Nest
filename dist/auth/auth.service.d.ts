import { UserRepository } from 'src/users/user.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepo;
    private readonly jwtservice;
    constructor(usersRepo: UserRepository, jwtservice: JwtService);
    singIn(email: any, password: any): Promise<"datos incompletos" | {
        success: string;
        token: string;
    }>;
    signup(user: any): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin: boolean;
        orders_id: import("../entities/order.entity").Orders[];
    }>;
}
