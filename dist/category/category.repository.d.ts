import { Repository } from 'typeorm';
import { Category } from "src/entities/category.entity";
export declare class RepositoryCategory {
    private readonly categoryrepository;
    constructor(categoryrepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    addCategories(): Promise<string>;
}
