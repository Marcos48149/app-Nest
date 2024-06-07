"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const module_product_1 = require("./product/module.product");
const auth_module_1 = require("./auth/auth.module");
const logger_1 = require("./middleware/logger");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const category_module_1 = require("./category/category.module");
const order_module_1 = require("./Orders/order.module");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const typeorm_2 = require("./config/typeorm");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('typeorm')
            }),
            users_module_1.UsersModule, module_product_1.ProductModule, auth_module_1.AuthModule, category_module_1.CategoryModule, order_module_1.OrderModule, file_upload_module_1.FileUploadModule,
            jwt_1.JwtModule.register({
                global: true,
                signOptions: { expiresIn: '1h' },
                secret: process.env.JWT_SECRET
            })],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, logger_1.Logger],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map