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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
let UserRepository = class UserRepository {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }
    async getUser(page, limit) {
        const start = (page - 1) * limit;
        const userList = await this.UserRepository.find({
            skip: start,
            take: limit,
        });
        if (!userList) {
            return 'no hay usuarios';
        }
        const userNoPass = userList.map(({ password, ...user }) => user);
        return userNoPass;
    }
    async getUserId(id) {
        const userId = await this.UserRepository.findOne({
            where: { id },
            relations: {
                orders_id: true
            }
        });
        if (!userId)
            return `El usuario con el  id ${id} no existe`;
        const { password, ...noPassword } = userId;
        return noPassword;
    }
    async createAdmin(id, user) {
        const userAdmin = await this.UserRepository.update(id, user);
        return 'actualizacion de useario Admin con exito';
    }
    async postUser(user) {
        const newUser = await this.UserRepository.save(user);
        const dbUser = await this.UserRepository.findOneBy({ id: user.id });
        const { password, ...noPassword } = dbUser;
        return noPassword;
    }
    async updateUser(id, user) {
        await this.UserRepository.update(id, user);
        const update = await this.UserRepository.findOneBy({ id });
        const { password, ...noPassword } = update;
        return noPassword;
    }
    async deleteUser(id) {
        const user = await this.UserRepository.findOneBy({ id });
        await this.UserRepository.remove(user);
        const { password, ...noPassword } = user;
        return noPassword;
    }
    async getUserEmail(email) {
        return await this.UserRepository.findOneBy({ email: email });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=user.repository.js.map