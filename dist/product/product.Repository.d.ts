import { Category } from "src/entities/category.entity";
import { Products } from "src/entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductRepository {
    private readonly productRepo;
    private readonly categoryRepo;
    constructor(productRepo: Repository<Products>, categoryRepo: Repository<Category>);
    getProduct(page: any, limit: any): Promise<Products[]>;
    addProducts(): Promise<void>;
    getProductId(id: string): Promise<Products>;
    createProduct(product: any): Promise<string>;
    updateProduct(id: any, datos: any): Promise<Products[] | "no existe">;
    deleteProduct(id: any): Promise<{
        message: string;
        deletedProduct: import("typeorm").DeleteResult;
    }>;
}
