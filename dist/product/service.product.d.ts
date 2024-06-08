import { ProductRepository } from './product.Repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getProdcut(page: any, limit: any): Promise<import("../entities/product.entity").Products[]>;
    addProduct(): Promise<void>;
    getProductId(id: any): Promise<import("../entities/product.entity").Products>;
    createProduct(product: any): Promise<string>;
    updateProduct(id: any, datos: any): Promise<import("../entities/product.entity").Products[]>;
    deleteProduct(id: any): Promise<{
        message: string;
        deletedProduct: import("typeorm").DeleteResult;
    }>;
}
