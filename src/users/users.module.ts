import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Logger } from 'src/middleware/logger';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService,UserRepository]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
     // consumer.apply(Logger).forRoutes('users')
  }
}
