import {  Injectable } from "@nestjs/common";

import { Repository } from 'typeorm';
import * as datos from '../archivos/ecommerce-products.json'
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";



@Injectable()
export class RepositoryCategory {
    
    constructor(
        @InjectRepository(Category)
        private readonly categoryrepository: Repository<Category>) {}

        async getCategories(){
            return this.categoryrepository.find()
        }
    
    
        async addCategories() {
            
            for (const elem of datos) {
                await this.categoryrepository
                    .createQueryBuilder()
                    .insert()
                    .into(Category)
                    .values({ name: elem.category })
                    .orIgnore()
                    .execute();
            }
            return 'categorias agregadas';
        }
        
    }