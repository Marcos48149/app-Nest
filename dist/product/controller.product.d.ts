import { ProductService } from './service.product';
import { ProductDto } from 'src/DTO/productDTO';
export declare class ProductController {
    private readonly serviceProduct;
    constructor(serviceProduct: ProductService);
    getProduct(page: string, limit: string): Promise<import("../entities/product.entity").Products[]>;
    addProduct(): Promise<void>;
    getProductId(id: string): Promise<import("../entities/product.entity").Products>;
    createProduct(product: ProductDto): Promise<string>;
    updateProduct(id: number, datos: Partial<ProductDto>): Promise<import("../entities/product.entity").Products[]>;
    deleteProduct(id: number): Promise<{
        message: string;
        deletedProduct: import("typeorm").DeleteResult;
    }>;
}
