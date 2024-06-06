import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Length } from "class-validator";


export class ProductDto{

    @IsOptional()
    id?: number;

    @ApiProperty({
        description: 'Este es el name',
        example: 'galaxy s23',
      })
    @IsNotEmpty()
    @Length(3, 50)
    name: string;

    @ApiProperty({
        description: 'Esta es una descripcion',
        example: 'el mejor celular del mercado',
      })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'esto es el precio',
        example: 500,
      })
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @ApiProperty({
        description: 'Esto es el stock',
        example: 5,
      })
    @IsNotEmpty()
    @IsNumber()
    stock: number;

    @ApiProperty({
        description: 'Esto es una url ',
        example: 'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Pink_PDP_Image_Position-1__MXLA.jpg',
      })
    @IsNotEmpty()
    @IsUrl()
    imgUrl: string;

    
}