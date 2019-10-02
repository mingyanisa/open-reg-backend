import { Model, Document, Schema } from 'mongoose';

export interface User extends Document {
    username: string;
    password: string;
    info: {
        email: string;
        firstName: string;
        firstNameEn: string;
        lastName: string;
        lastNameEn: string;
        [key: string]: string;
    };
}

export type UserModel = Model<User>;

export const USER_MODEL = 'user';

const UserInfoSchema = new Schema(
    {
        email: String,
        firstName: String,
        firstNameEn: String,
        lastName: String,
        lastNameEn: String,
    },
    { strict: true },
);

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    info: UserInfoSchema,
});
