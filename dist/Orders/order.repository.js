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
exports.OrderRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../entities/order.entity");
const orderDetails_1 = require("../entities/orderDetails");
const product_entity_1 = require("../entities/product.entity");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
let OrderRepository = class OrderRepository {
    constructor(orderRepository, productRepository, detailsOrderRepository, userRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.detailsOrderRepository = detailsOrderRepository;
        this.userRepository = userRepository;
    }
    async addOrder(userId, product) {
        const Iduser = await this.userRepository.findOneBy({ id: userId });
        if (!Iduser) {
            throw new common_1.NotFoundException('usuario no encontrado');
        }
        let total = 0;
        const order = new order_entity_1.Orders();
        order.Date = new Date();
        order.user_id = userId;
        const newOrder = await this.orderRepository.save(order);
        console.log(newOrder);
        const productArray = await Promise.all(product.map(async (elem) => {
            const products = await this.productRepository.findOneBy({ id: elem.id });
            if (!products) {
                return `producto con id ${elem.id} no encontrado`;
            }
            total += Number(products.price);
            await this.productRepository.update({ id: elem.id }, { stock: products.stock - 1 });
            return products;
        }));
        const detailsOrder = new orderDetails_1.OrderDetails();
        detailsOrder.price = Number(Number(total).toFixed(2));
        detailsOrder.products = productArray;
        detailsOrder.order = newOrder;
        await this.detailsOrderRepository.save(detailsOrder);
        return await this.orderRepository.find({
            where: { id: newOrder.id },
            relations: { orderDetails: true }
        });
    }
    async getOrder(id) {
        const order = this.orderRepository.findOne({
            where: { id },
            relations: {
                orderDetails: { products: true },
            },
        });
        if (!order) {
            return `orden con id ${id} no encontrada`;
        }
        return order;
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(2, (0, typeorm_1.InjectRepository)(orderDetails_1.OrderDetails)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrderRepository);
//# sourceMappingURL=order.repository.js.map