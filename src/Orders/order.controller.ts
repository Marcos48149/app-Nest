import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Post, Request, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { OrderDto } from 'src/DTO/orderDTO';
import { AuthGuard } from 'src/auth/authGuard/guard';
import { ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/authGuard/roles.guards';
import { RoleEnum } from 'src/roles/roles.enum';
import { Roles } from 'src/roles/roles';
import { OrderRepository } from './order.repository';
import { Repository } from 'typeorm';

@ApiTags('ORDER')
@Controller('order')
export class OrderController {
    constructor( @InjectRepository(Orders)
    private readonly orderRepository: Repository<Orders>,
        private readonly orderservice: OrderService,
        
    ) { }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getOrder(@Param('id',ParseUUIDPipe) id: string , @Request() req) {
     
        const order = await this.orderRepository.findOne(
            {where: { id },
            relations: {user_id:true}
        })
       // console.log((await order).user_id.id)
        console.log(req.userId,'req userId') 
        if (!order) {
            throw new NotFoundException('Orden no encontrada');
          }
        if(order.user_id.id != req.userId ){ throw new NotFoundException('no puedes acceder a la orden de otra persona')}
       
        return this.orderservice.getOrder(id)
    }

    @Post()
    @UseGuards(AuthGuard)
    async addOrder(@Body() order: OrderDto , @Request() req) { 
        const { userId, product } = order
        if(userId != req.userId ){ throw new NotFoundException('No puedes crear ordenes para otro usuario')}
       
        return await this.orderservice.addOrder(userId, product)

    }
    @Delete(':id')
    async deleteOrder(@Param('id' ,ParseUUIDPipe) id: string){
        return this.orderservice.deleteOrder(id)
    }
    
    
}
