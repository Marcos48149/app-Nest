import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/authGuard/guard';

@ApiTags('CATEGORY')
@Controller('category')
export class CategoryController {


    constructor(private readonly categoryService:CategoryService ){}

    @Get()
    @UseGuards(AuthGuard)
    async getCategories(){
     return this.categoryService.getCategories()
    }


    @Get('seeder')
    addCategories(){
        return this.categoryService.addCategories()
    }
}
