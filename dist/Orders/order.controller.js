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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("./order.service");
const orderDTO_1 = require("../DTO/orderDTO");
const guard_1 = require("../auth/authGuard/guard");
const swagger_1 = require("@nestjs/swagger");
let OrderController = class OrderController {
    constructor(orderservice) {
        this.orderservice = orderservice;
    }
    async getOrder(id) {
        return this.orderservice.getOrder(id);
    }
    async addOrder(order) {
        const { userId, product } = order;
        return await this.orderservice.addOrder(userId, product);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [orderDTO_1.OrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('ORDER'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map