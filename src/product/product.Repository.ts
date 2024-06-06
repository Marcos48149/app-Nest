import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";
import { Products } from "src/entities/product.entity";
import { Repository } from "typeorm";
import * as datos from '../archivos/ecommerce-products.json'


@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Products)
    private readonly productRepo: Repository<Products>,
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>) { }


  async getProduct(page, limit) {
    const start = (page - 1) * limit;
    const producList = await this.productRepo.find({
      skip: start,
      take: limit,
    })

    if (!producList) { throw new NotFoundException('no hay usuario') }
    return producList;

  }

  async addProducts() {
    const categories = await this.categoryRepo.find()

    for (const elem of datos) {
      let category = categories.find(category => category.name === elem.category);

      if (!category) {
        category = new Category();
        category.name = elem.category;
        await this.categoryRepo.save(category);
        // Añadir la nueva categoría al array local de categorías para futuras iteraciones
        categories.push(category);
      }

      datos.map(async (elem) => {
        const category = categories.find(category => category.name === elem.category)

        const product = new Products();
        product.name = elem.title;
        product.description = elem.description;
        product.price = elem.price;
        product.stock = elem.stock;
        product.imgUrl = elem.images;
        product.category = category;

        await this.productRepo
          .createQueryBuilder()
          .insert()
          .into(Products)
          .values([product])
          .orUpdate(['description', 'price', 'stock', 'imgUrl'], ['name'])
          .execute()
        return 'productos agregados'
      })


    }
  }

  async getProductId(id:string) {

    const productId =await this.productRepo.findOneBy({id:id})
    console.log(productId)


    if (!productId) { 'no existe product' }
    return productId

  }

  async createProduct(product) {
    //const id = this.productRepo. + 1;
    /* this.productRepo = { ...this.productRepo, {product }}
    return id; */
    const category = await this.categoryRepo.findOne({ where: { name: product.category } })

    const newproducts = new Products();
    newproducts.name = product.title;
    newproducts.description = product.description;
    newproducts.price = product.price;
    newproducts.stock = product.stock;
    newproducts.imgUrl = product.images;
    newproducts.category = category;

    await this.productRepo
      .createQueryBuilder()
      .insert()
      .into(Products)
      .values([newproducts])
      .orUpdate(['description', 'price', 'stock', 'imgUrl'], ['name'])
      .execute()
    return 'productos agregados'

  }

  async updateProduct(id, datos) {

    await this.productRepo.update(id, datos)
    const updateProduct = await this.productRepo.find({where:{id:id}})
    console.log(updateProduct)
    if(!updateProduct){return 'no existe'}
    
   
    return updateProduct;

  }

  async deleteProduct(id) {

    const deleteProduct = await this.productRepo.delete(id)
    if (!deleteProduct) {
      throw new NotFoundException(`Usuario con id ${id} no existe`);
    }
    return {
      message: `Se eliminó el producto con id ${id}`,
      deletedProduct: deleteProduct
    }
  }
}