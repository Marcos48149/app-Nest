import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/DTO/loginDTO';
import { UserDto } from 'src/DTO/userDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AUTH')
@Controller('auth')
export class AuthController {

    constructor(private readonly serviceAuth: AuthService,
    ) {}
     
    @Post('singin')
   async singIn(@Body() credential: LoginDto){

   const {email, password}= credential
      return this.serviceAuth.singIn(email, password);
    }

    @HttpCode(201)
    @Post('singup')
    async signup(@Body() user: UserDto ){
     
        return this.serviceAuth.signup(user)

    }
}
