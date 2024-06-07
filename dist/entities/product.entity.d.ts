import { Category } from "./category.entity";
import { OrderDetails } from "./orderDetails";
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderDetails: OrderDetails[];
}
