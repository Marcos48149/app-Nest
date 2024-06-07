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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const loginDTO_1 = require("../DTO/loginDTO");
const userDTO_1 = require("../DTO/userDTO");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    constructor(serviceAuth) {
        this.serviceAuth = serviceAuth;
    }
    async singIn(credential) {
        const { email, password } = credential;
        return this.serviceAuth.singIn(email, password);
    }
    async signup(user) {
        return this.serviceAuth.signup(user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('singin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [loginDTO_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singIn", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)('singup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userDTO_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('AUTH'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map