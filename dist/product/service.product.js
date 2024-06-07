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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_Repository_1 = require("./product.Repository");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async getProdcut(page, limit) {
        return this.productRepository.getProduct(page, limit);
    }
    async addProduct() {
        return this.productRepository.addProducts();
    }
    async getProductId(id) {
        return await this.productRepository.getProductId(id);
    }
    async createProduct(product) {
        return this.productRepository.createProduct(product);
    }
    async updateProduct(id, datos) {
        return this.productRepository.updateProduct(id, datos);
    }
    async deleteProduct(id) {
        return this.productRepository.deleteProduct(id);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_Repository_1.ProductRepository])
], ProductService);
//# sourceMappingURL=service.product.js.map