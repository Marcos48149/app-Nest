import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { RoleEnum } from 'src/roles/roles.enum';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) { }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const tokenAutorizathion = request.headers.authorization;
   
    if (!tokenAutorizathion) {
      throw new BadRequestException('no se ha enviado el token');
    }

    const token = tokenAutorizathion.split(' ')[1] 
   
    if (!token) {
      throw new BadRequestException('No se ha enviado el token o token incorrecto');
    }

    try {
      const secret = process.env.JWT_SECRET
      const payload = this.jwtService.verify(token, { secret });
      //console.log(payload)
      

      payload.iat = new Date(payload.iat * 1000)
      payload.exp = new Date(payload.exp * 1000)
      payload.roles = payload.isAdmin ? [RoleEnum.Admin] : [RoleEnum.User]  
      request.userId = payload.id; 
      request.payload = payload;

      //console.log(payload.isAdmin, 'guard')
     
      return true;

    } catch (error) {
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

}