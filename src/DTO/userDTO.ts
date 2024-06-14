
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional,
  IsPhoneNumber,
  IsString, Length, Matches, Max, Validate,

} from 'class-validator';
import { PasswordConfirmation } from 'src/decorators/confirmPassword';
//import { PasswordConfirmation } from 'src/decorators/confirmPassword';



export class UserDto {

  @IsOptional()
  id?: string;

  @ApiProperty({
    description: 'Este es el nombre del usuario',
    example: 'marcos@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Este es el nombre del usuario',
    example: 'marcos',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  @Matches(/^[a-zA-Z ]+$/)
  name: string;

  @ApiProperty({
    description: 'Esta es la contraseña',
    example: 'Password3!',
  })
  @IsNotEmpty()
  @IsString()
  @Length(8, 15)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, {
    message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*'
  })
  password: string;


  @ApiProperty({
    description: 'confirmacion de contraseña',
    example: 'Password3!',
  })
  @IsNotEmpty()
  @Validate(PasswordConfirmation, ['password'])
  confirmPassword: string;


  @ApiProperty({
    description: 'Esta es la direccion',
    example: 'gascon',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 80)
  address: string;


  @ApiProperty({
    description: 'numero de telefono',
    example: 1123456789,
  })
  @IsNotEmpty()
  @IsPhoneNumber(null, { message: 'Número de celular inválido' })
  phone: string;

  @ApiProperty({
    description: 'Esta es el pais',
    example: 'Argentina',
  })
  @IsNotEmpty({ message: 'ciudad debe ser agregado' })
  @IsString()
  @Length(5, 20)
  country?: string;

  @ApiProperty({
    description: 'Esta es la ciudad',
    example: 'corrientes',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 20)
  city?: string;

  @IsEmpty()
  isAdmin?: boolean;

  @ApiProperty({
    description: 'fecha de nacimiento',
    example: '5/7/1999',
  })
  @IsNotEmpty()
  @IsString()
  birthdate: string

}

