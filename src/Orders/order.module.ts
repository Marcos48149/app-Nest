import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'src/entities/order.entity';
import { OrderDetails } from 'src/entities/orderDetails';
import { Users } from 'src/entities/user.entity';
import { Products } from 'src/entities/product.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Orders]),
  TypeOrmModule.forFeature([OrderDetails]),
  TypeOrmModule.forFeature([Users]),
  TypeOrmModule.forFeature([Products])
],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository]
})
export class OrderModule {}
