"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const controller_product_1 = require("./controller.product");
const service_product_1 = require("./service.product");
const product_Repository_1 = require("./product.Repository");
const category_entity_1 = require("../entities/category.entity");
const product_entity_1 = require("../entities/product.entity");
const category_repository_1 = require("../category/category.repository");
const typeorm_1 = require("@nestjs/typeorm");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Products, category_entity_1.Category])],
        controllers: [controller_product_1.ProductController],
        providers: [service_product_1.ProductService, product_Repository_1.ProductRepository, category_repository_1.RepositoryCategory]
    })
], ProductModule);
//# sourceMappingURL=module.product.js.map