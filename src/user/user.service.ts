import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER_MODEL, UserModel } from './user.model';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(USER_MODEL) private readonly userModel: UserModel,
    ) {}

    async createUser(user: CreateUserDTO) {
        const newUser = new this.userModel(user);
        return await newUser.save();
    }

    findById(id: string) {
        return this.userModel.findById(id).exec();
    }

    findByUsername(username: string) {
        return this.userModel.findOne({ username }).exec();
    }
}