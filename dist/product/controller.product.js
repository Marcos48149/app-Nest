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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const service_product_1 = require("./service.product");
const productDTO_1 = require("../DTO/productDTO");
const guard_1 = require("../auth/authGuard/guard");
const swagger_1 = require("@nestjs/swagger");
const roles_1 = require("../roles/roles");
const roles_enum_1 = require("../roles/roles.enum");
const roles_guards_1 = require("../auth/authGuard/roles.guards");
let ProductController = class ProductController {
    constructor(serviceProduct) {
        this.serviceProduct = serviceProduct;
    }
    async getProduct(page, limit) {
        if (!page || !limit) {
            return this.serviceProduct.getProdcut(1, 5);
        }
        return this.serviceProduct.getProdcut(page, limit);
    }
    addProduct() {
        return this.serviceProduct.addProduct();
    }
    async getProductId(id) {
        console.log(typeof (id));
        return await this.serviceProduct.getProductId(id);
    }
    async createProduct(product) {
        return this.serviceProduct.createProduct(product);
    }
    async updateProduct(id, datos) {
        return this.serviceProduct.updateProduct(id, datos);
    }
    async deleteProduct(id) {
        return this.serviceProduct.deleteProduct(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)('seeder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "addProduct", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductId", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productDTO_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(":id"),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(":id"),
    (0, roles_1.Roles)(roles_enum_1.RoleEnum.Admin),
    (0, common_1.UseGuards)(guard_1.AuthGuard, roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('PRODUCTS'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [service_product_1.ProductService])
], ProductController);
//# sourceMappingURL=controller.product.js.map