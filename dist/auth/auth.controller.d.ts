import { AuthService } from './auth.service';
import { LoginDto } from 'src/DTO/loginDTO';
import { UserDto } from 'src/DTO/userDTO';
export declare class AuthController {
    private readonly serviceAuth;
    constructor(serviceAuth: AuthService);
    singIn(credential: LoginDto): Promise<"datos incompletos" | {
        success: string;
        token: string;
    }>;
    signup(user: UserDto): Promise<{
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
