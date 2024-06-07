import { RepositoryCategory } from './category.repository';
export declare class CategoryService {
    private readonly repositoryCategory;
    constructor(repositoryCategory: RepositoryCategory);
    getCategories(): Promise<import("../entities/category.entity").Category[]>;
    addCategories(): Promise<string>;
}
