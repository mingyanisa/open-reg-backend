import { Model, Document, Schema } from 'mongoose';

export interface User extends Document {
    username: string;
    password: string;
}

export type UserModel = Model<User>;

export const USER_MODEL = 'user';

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
});
