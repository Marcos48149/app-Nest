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
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const file_upload_repository_1 = require("./file-upload.repository");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entities/product.entity");
const typeorm_2 = require("typeorm");
let FileUploadService = class FileUploadService {
    constructor(fileRepository, productRepository) {
        this.fileRepository = fileRepository;
        this.productRepository = productRepository;
    }
    async updateImage(file, productId) {
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!product) {
            throw new common_1.NotFoundException(`PRODUCTO CON id: ${productId} NO ENCONTRADO`);
        }
        const response = await this.fileRepository.updateImage(file);
        const updateProduct = await this.productRepository.update(productId, { imgUrl: response.secure_url });
        const newImage = await this.productRepository.findOneBy({ id: productId });
        return { message: `Se agrego la imagen`,
            Image: newImage };
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [file_upload_repository_1.FileRepository,
        typeorm_2.Repository])
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map