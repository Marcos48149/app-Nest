import { Module } from '@nestjs/common';
import { ProductController } from './controller.product';
import { ProductService } from './service.product';
import { ProductRepository } from './product.Repository';
import { Category } from 'src/entities/category.entity';
import { Products } from 'src/entities/product.entity';
import { RepositoryCategory } from 'src/category/category.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Products,Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, RepositoryCategory]
})
export class ProductModule {}
