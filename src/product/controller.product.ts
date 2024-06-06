import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './service.product';
import { ProductDto } from 'src/DTO/productDTO';
import { AuthGuard } from 'src/auth/authGuard/guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles';
import { RoleEnum } from 'src/roles/roles.enum';
import { RolesGuard } from 'src/auth/authGuard/roles.guards';

@ApiTags('PRODUCTS')
@Controller('product')
export class ProductController {

    constructor(private readonly serviceProduct:ProductService) {}

  @Get()
 async getProduct(@Query('page') page: string, @Query('limit') limit: string){
  if (!page || !limit) { return this.serviceProduct.getProdcut(1, 5) }

    return this.serviceProduct.getProdcut(page, limit);
  }

  @Get('seeder')
    addProduct() {
        return this.serviceProduct.addProduct();
    }

  @HttpCode(200)
    @Get(":id")
    async getProductId(@Param("id" ,ParseUUIDPipe) id:string){
      console.log(typeof(id))
        return await this.serviceProduct.getProductId(id)
    } 

     @HttpCode(201)
     @ApiBearerAuth()
     @Post()
     @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    async createProduct(@Body() product: ProductDto ){
        return this.serviceProduct.createProduct(product)
    }

    @HttpCode(201)
    @ApiBearerAuth()
    @Put(":id")
    @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard,RolesGuard)
    async updateProduct(@Param("id",ParseUUIDPipe) id:number, @Body() datos:Partial<ProductDto> ){
            return this.serviceProduct.updateProduct(id, datos)
    }

    @HttpCode(201)
    @ApiBearerAuth()
    @Delete(":id")
    @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard,RolesGuard)
    async deleteProduct(@Param("id",ParseUUIDPipe) id:number){
            return this.serviceProduct.deleteProduct(id)
    } 
}
