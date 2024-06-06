import { Injectable } from '@nestjs/common';
import { RepositoryCategory } from './category.repository';

@Injectable()
export class CategoryService {
    constructor(private readonly repositoryCategory: RepositoryCategory){}

    async getCategories(){
        return this.repositoryCategory.getCategories()
}


async addCategories(){
return this.repositoryCategory.addCategories()

}
}
