import { Column,  Entity,  JoinColumn,  ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {Users} from './user.entity'
import { OrderDetails } from './orderDetails';



@Entity({name:'orders'})
export class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    
    @Column()
    Date: Date

    @OneToOne(()=>OrderDetails, (orderDetails)=> orderDetails.order)
    orderDetails: OrderDetails;

    @ManyToOne(()=>Users, user=>user.orders_id)
    @JoinColumn()
    user_id: Users;

}