import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.Repository';

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository){}
    async getProdcut(page, limit){
        return this.productRepository.getProduct(page, limit)
    }

    async addProduct(){
        return this.productRepository.addProducts();
    }

    async getProductId(id){
        return await this.productRepository.getProductId(id)
    }

    async createProduct(product){
        return this.productRepository.createProduct(product)
    }

    async updateProduct(id, datos){
        return this.productRepository.updateProduct(id, datos)
    }

    async deleteProduct(id){
        return this.productRepository.deleteProduct(id)
    }
}
