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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const guard_1 = require("../auth/authGuard/guard");
const roles_1 = require("../roles/roles");
const roles_guards_1 = require("../auth/authGuard/roles.guards");
const roles_enum_1 = require("../roles/roles.enum");
const swagger_1 = require("@nestjs/swagger");
let UsersController = class UsersController {
    constructor(serviceUser) {
        this.serviceUser = serviceUser;
    }
    async getUser(page, limit) {
        if (!page || !limit) {
            return this.serviceUser.getUser(1, 5);
        }
        return await this.serviceUser.getUser(Number(page), Number(limit));
    }
    async getUserId(id) {
        console.log(id);
        const user = await this.serviceUser.getUserId(id);
        return user;
    }
    async createAdmin(id, user) {
        return this.serviceUser.createAdmin(id, user);
    }
    async updateUser(id, datos) {
        return this.serviceUser.updateUser(id, datos);
    }
    async deleteUser(id) {
        return this.serviceUser.deleteUser(id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserId", null);
__decorate([
    (0, common_1.Put)('admin/:id'),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Put)(":id"),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('USERS'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map