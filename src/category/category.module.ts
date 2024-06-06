import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { RepositoryCategory } from './category.repository';
import { Category } from 'src/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports:[TypeOrmModule.forFeature([ Category])],
  controllers: [CategoryController],
  providers: [CategoryService,RepositoryCategory ]
})
export class CategoryModule {}
