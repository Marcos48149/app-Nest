import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/interface/User';
import { AuthGuard } from 'src/auth/authGuard/guard';
import { UserDto } from 'src/DTO/userDTO';
import { Roles } from 'src/roles/roles';
import { RolesGuard } from 'src/auth/authGuard/roles.guards';
import { RoleEnum } from 'src/roles/roles.enum';
import { get } from 'http';
import { ApiTags } from '@nestjs/swagger';

//Crear todos los endpoints CRUD para Products y Users (GET, GET{id}, POST, PUT{id}, DELETE{id}).
@ApiTags('USERS')
@Controller('users')
export class UsersController {
    constructor(private readonly serviceUser: UsersService) { }

    @HttpCode(200)
    @Get()
    @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    async getUser(@Query('page') page: number, @Query('limit') limit: number) {
        if (!page || !limit) { return this.serviceUser.getUser(1, 5) }
        return await this.serviceUser.getUser(Number(page), Number(limit));


    }

    @HttpCode(200)
    @Get(':id')
    @UseGuards(AuthGuard)
    async getUserId(@Param('id', ParseUUIDPipe) id: string) {
        console.log(id)
        const user = await this.serviceUser.getUserId(id);
        return user;

    }

    @Put('admin/:id')
    @Roles(RoleEnum.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    async createAdmin(@Param('id', ParseUUIDPipe) id: string, @Body() user: Partial<UserDto>) {
        return this.serviceUser.createAdmin(id, user)
    }

    @Put(":id")
    @UseGuards(AuthGuard)
    async updateUser(@Param("id") id: number, @Body() datos: Partial<UserDto>) {
        return this.serviceUser.updateUser(id, datos)
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    async deleteUser(@Param("id", ParseUUIDPipe) id: number) {
        return this.serviceUser.deleteUser(id)
    }
}
