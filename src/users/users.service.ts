import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepo: UserRepository) { }

    async getUser(page, limi) {
        return this.userRepo.getUser(page, limi)
    }


    async getUserId(id) {
        return this.userRepo.getUserId(id)
    }

    async createAdmin(id,user) {
        return this.userRepo.createAdmin(id,user)
    }

    async postUser(user) {
        return this.userRepo.postUser(user);
    }

    async updateUser(id, datos) {
        return this.userRepo.updateUser(id, datos);
    }

    async deleteUser(id) {
        return this.userRepo.deleteUser(id)
    }
}
