import { Model, Document, Schema } from 'mongoose';
import { Question, QuestionSchema } from './question.model';

export interface Form extends Document {
    eventId: any;
    questions: Question[];
    title: string;
    description: string;
}

export type FormModel = Model<Form>;

export const FORM_MODEL = 'form';

export const FormSchema = new Schema({
    eventId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    questions: {
        type: [QuestionSchema],
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
