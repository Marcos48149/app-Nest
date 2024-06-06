import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsObject, IsUUID, ValidateNested } from "class-validator";
import { Products } from "src/entities/product.entity";



export class OrderDto {

  @ApiProperty({
    description: 'Esto es el Id de usuario  ',
    example: "29e93be6-d2b9-43e0-849e-6cba42a9cf90"
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'Esto es una orden ',
    example:
      [
        {
          "id": "4c5ec3fe-202d-4e4c-b1a2-4329903bb21e"
        },
        {
          "id": "096413b4-2f9d-4ced-ab66-3b57350f9219"
        }
      ]

  })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @IsObject({ each: true })
  product: Products[];


}