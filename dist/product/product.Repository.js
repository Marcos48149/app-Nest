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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../entities/category.entity");
const product_entity_1 = require("../entities/product.entity");
const typeorm_2 = require("typeorm");
const datos = require("../archivos/ecommerce-products.json");
let ProductRepository = class ProductRepository {
    constructor(productRepo, categoryRepo) {
        this.productRepo = productRepo;
        this.categoryRepo = categoryRepo;
    }
    async getProduct(page, limit) {
        const start = (page - 1) * limit;
        const producList = await this.productRepo.find({
            skip: start,
            take: limit,
        });
        if (!producList) {
            throw new common_1.NotFoundException('no hay usuario');
        }
        return producList;
    }
    async addProducts() {
        const categories = await this.categoryRepo.find();
        for (const elem of datos) {
            let category = categories.find(category => category.name === elem.category);
            if (!category) {
                category = new category_entity_1.Category();
                category.name = elem.category;
                await this.categoryRepo.save(category);
                categories.push(category);
            }
            datos.map(async (elem) => {
                const category = categories.find(category => category.name === elem.category);
                const product = new product_entity_1.Products();
                product.name = elem.title;
                product.description = elem.description;
                product.price = elem.price;
                product.stock = elem.stock;
                product.imgUrl = elem.images;
                product.category = category;
                await this.productRepo
                    .createQueryBuilder()
                    .insert()
                    .into(product_entity_1.Products)
                    .values([product])
                    .orUpdate(['description', 'price', 'stock', 'imgUrl'], ['name'])
                    .execute();
                return 'productos agregados';
            });
        }
    }
    async getProductId(id) {
        const productId = await this.productRepo.findOneBy({ id: id });
        console.log(productId);
        if (!productId) {
            'no existe product';
        }
        return productId;
    }
    async createProduct(product) {
        const category = await this.categoryRepo.findOne({ where: { name: product.category } });
        const newproducts = new product_entity_1.Products();
        newproducts.name = product.title;
        newproducts.description = product.description;
        newproducts.price = product.price;
        newproducts.stock = product.stock;
        newproducts.imgUrl = product.images;
        newproducts.category = category;
        await this.productRepo
            .createQueryBuilder()
            .insert()
            .into(product_entity_1.Products)
            .values([newproducts])
            .orUpdate(['description', 'price', 'stock', 'imgUrl'], ['name'])
            .execute();
        return 'productos agregados';
    }
    async updateProduct(id, datos) {
        await this.productRepo.update(id, datos);
        const updateProduct = await this.productRepo.find({ where: { id: id } });
        console.log(updateProduct);
        if (!updateProduct) {
            return 'no existe';
        }
        return updateProduct;
    }
    async deleteProduct(id) {
        const deleteProduct = await this.productRepo.delete(id);
        if (!deleteProduct) {
            throw new common_1.NotFoundException(`Usuario con id ${id} no existe`);
        }
        return {
            message: `Se eliminó el producto con id ${id}`,
            deletedProduct: deleteProduct
        };
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductRepository);
//# sourceMappingURL=product.Repository.js.map