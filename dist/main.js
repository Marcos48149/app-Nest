"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_1 = require("./middleware/logger");
const category_repository_1 = require("./category/category.repository");
const product_Repository_1 = require("./product/product.Repository");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerConfing = new swagger_1.DocumentBuilder()
        .setTitle('Proyecto M4 Back')
        .setDescription('Esta es una documentacion backend, de mi primer proyecto para un E-commerce')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfing);
    swagger_1.SwaggerModule.setup('Api', app, document);
    const repositoryCategory = app.get(category_repository_1.RepositoryCategory);
    await repositoryCategory.addCategories();
    const repoProduct = app.get(product_Repository_1.ProductRepository);
    await repoProduct.addProducts();
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(logger_1.LoggerGlobal);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map