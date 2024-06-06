import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Products } from './product.entity';
import { Orders } from './order.entity';

@Entity({name: 'orderdetails'})
export class OrderDetails{
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();


    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false} )
    price:number;

    
     @OneToOne(() => Orders,(order)=>order.orderDetails)
    @JoinColumn()
    order: Orders; 


    @ManyToMany(()=> Products)
    @JoinTable()
    products :Products[]
}