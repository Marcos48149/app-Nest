import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerGlobal } from './middleware/logger';
import { RepositoryCategory } from './category/category.repository';
import { ProductRepository } from './product/product.Repository';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfing = new DocumentBuilder()
  .setTitle('Proyecto M4 Back')
  .setDescription('Esta es una documentacion backend, de mi primer proyecto para un E-commerce')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

  const document= SwaggerModule.createDocument(app, swaggerConfing)
  SwaggerModule.setup('Api', app, document)

  const repositoryCategory = app.get(RepositoryCategory);
  await repositoryCategory.addCategories();

  const repoProduct = app.get(ProductRepository)
  await repoProduct.addProducts();

  app.useGlobalPipes(new ValidationPipe())
 app.use(LoggerGlobal)
  await app.listen(3000);
}
bootstrap();
