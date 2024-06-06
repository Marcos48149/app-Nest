import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/user.entity";
import { Repository } from "typeorm";


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(Users)
        private readonly UserRepository: Repository<Users>) { }

    async getUser(page, limit) {

        const start = (page - 1) * limit;
        const userList = await this.UserRepository.find({
            skip: start,
            take: limit,
        })
        if (!userList) { return 'no hay usuarios' }

        const userNoPass = userList.map(({ password, ...user }) => user)
        return userNoPass;
    }


    async getUserId(id: string) {
        const userId = await this.UserRepository.findOne({
            where: { id },
            relations: {
                orders_id: true
            }
        })

        if (!userId) return `El usuario con el  id ${id} no existe`;
        const { password, ...noPassword } = userId
        return noPassword;
    }

    async createAdmin(id,user) {
        const userAdmin = await this.UserRepository.update(id,user)
        
       // await this.UserRepository.save(user)
        return 'actualizacion de useario Admin con exito' //await this.UserRepository.findOneBy(id)

    }


    async postUser(user: Users) {
        const newUser = await this.UserRepository.save(user)
        const dbUser = await this.UserRepository.findOneBy({ id: user.id })

        const { password, ...noPassword } = dbUser


        return noPassword
    }


    async updateUser(id: string, user) {
        await this.UserRepository.update(id, user)
        const update = await this.UserRepository.findOneBy({ id })

        const { password, ...noPassword } = update
        return noPassword;
    }

    async deleteUser(id: string) {
        const user = await this.UserRepository.findOneBy({ id });
        await this.UserRepository.remove(user);
        const { password, ...noPassword } = user

        return noPassword;
    }

    async getUserEmail(email: string) {
        return await this.UserRepository.findOneBy({ email: email });
        //return this.UserRepository.find({where: {email:email}})

    }

}
