import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getCategories(): Promise<import("../entities/category.entity").Category[]>;
    addCategories(): Promise<string>;
}
