import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { OrderDto } from 'src/DTO/orderDTO';
import { AuthGuard } from 'src/auth/authGuard/guard';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/authGuard/roles.guards';
import { RoleEnum } from 'src/roles/roles.enum';
import { Roles } from 'src/roles/roles';

@ApiTags('ORDER')
@Controller('order')
export class OrderController {
    constructor(
        private readonly orderservice: OrderService
    ) { }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getOrder(@Param('id',ParseUUIDPipe) id: string) {
        return this.orderservice.getOrder(id)
    }

    @Post()
    @UseGuards(AuthGuard)
    async addOrder(@Body() order: OrderDto) { 
        const { userId, product } = order
       
        return await this.orderservice.addOrder(userId, product)

    }
    @Delete(':id')
    async deleteOrder(@Param('id') id: string){
        return this.orderservice.deleteOrder(id)
    }
    
    
}
