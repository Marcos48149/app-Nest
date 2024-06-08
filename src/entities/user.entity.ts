import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Orders } from "./order.entity";

@Entity({name:'users'})
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50, nullable: false })
    name: string

    @Column({ length: 50, unique: true, nullable: false })
    email: string

    @Column({ length: 72,  nullable: false }) 
    password:string
   

    @Column()
    phone: string

    @Column({length: 50})
    country:string

    @Column()
    address:string

    @Column({length: 50})
    city: string

    @Column({default: false})
    isAdmin: boolean

    @OneToMany(()=> Orders, order => order.user_id)
    @JoinColumn()
    orders_id: Orders[] //Relación 1:N con orders.
}