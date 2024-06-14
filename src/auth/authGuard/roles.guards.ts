import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RoleEnum } from 'src/roles/roles.enum';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>('rolesK', [
      context.getHandler(),
      context.getClass(),
    ]);
  
   
    const request = context.switchToHttp().getRequest();
    const user= request.payload
    const hasRole= ()=> requiredRoles.some((role) => user.roles.includes(role) );

    //console.log(request.payload ,'user payload')
    
    const valid= user && user.roles && hasRole();
    
    if(!valid) throw new ForbiddenException(`no tienes permisos `)
   
   return valid;
   
  }
}