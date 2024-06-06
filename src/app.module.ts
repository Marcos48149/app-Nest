import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/module.product';
import { AuthModule } from './auth/auth.module';
import { Logger } from './middleware/logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';

import { OrderModule } from './Orders/order.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import typeOrmeConfig from './config/typeorm'
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [typeOrmeConfig]
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => configService.get('typeorm')
  }),
   UsersModule, ProductModule, AuthModule, CategoryModule,OrderModule, FileUploadModule,
   JwtModule.register({
    global: true,
    signOptions: { expiresIn: '1h' },
    secret: process.env.JWT_SECRET
  })],
    controllers: [AppController],
      providers: [AppService, Logger],
    })
  
    
export class AppModule { }
