"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../users/user.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepo, jwtservice) {
        this.usersRepo = usersRepo;
        this.jwtservice = jwtservice;
    }
    async singIn(email, password) {
        if (!email || !password)
            return 'datos incompletos';
        const userEmail = await this.usersRepo.getUserEmail(email);
        if (!userEmail) {
            throw new common_1.NotFoundException('email no encontrado');
        }
        const user = await bcrypt.compare(password, userEmail.password);
        if (!user) {
            throw new common_1.BadRequestException('credenciales incorrectas');
        }
        const userPayload = {
            id: userEmail.id,
            email: userEmail.email,
            isAdmin: userEmail.isAdmin
        };
        const token = this.jwtservice.sign(userPayload);
        return { success: 'usuario logueado', token };
    }
    async signup(user) {
        const userEmail = await this.usersRepo.getUserEmail(user.email);
        if (userEmail) {
            throw new common_1.BadRequestException(`el usuario ya existe ${user.email}`);
        }
        const passwordHash = await bcrypt.hash(user.password, 10);
        if (!passwordHash) {
            throw new common_1.BadRequestException('Error al hashear la contraseña');
        }
        return await this.usersRepo.postUser({ ...user, password: passwordHash });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map