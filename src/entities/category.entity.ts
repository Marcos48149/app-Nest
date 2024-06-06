import { v4 as uuid } from 'uuid';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Products } from './product.entity';


@Entity({name:'category'})
@Unique(['name'])
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string = uuid();


    @Column({ length: 50, nullable: false })
    name: string;

    @OneToMany(()=> Products, (products)=> products.category)
    @JoinColumn()
    products: Products[]
}