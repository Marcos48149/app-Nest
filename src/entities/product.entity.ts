import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Category } from "./category.entity";
import { OrderDetails } from "./orderDetails";

@Entity({name:'products'})
@Unique(['name'])
export class Products {
    @PrimaryGeneratedColumn('uuid')
    id: string 

    @Column({length: 50,  nullable: false})
    name: string;

    @Column()
    description: string;


    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ type: 'int',nullable: false })
    stock: number;

    @Column({type:'text',
        default: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Pink_PDP_Image_Position-1__MXLA.jpg'
    })
    imgUrl: string;

     @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category:  Category ; 


     @ManyToMany(() => OrderDetails)
        orderDetails: OrderDetails[];
 
    
}