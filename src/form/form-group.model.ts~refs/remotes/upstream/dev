import { Model, Document, Schema } from 'mongoose';

export interface FormGroup {
    order: number;
    title: string;
    description?: string;
}

export interface FormGroupDocument extends Document, FormGroup {}

export type FormGroupModel = Model<FormGroupDocument>;

export const FORM_GROUP_MODEL = 'formGroup';

export const FormGroupSchema = new Schema({
    order: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});
