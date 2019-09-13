import { Model, Document, Schema } from 'mongoose';

export interface Question extends Document {
    type: any;
    title: string;
    choices: string[];
    required: boolean;
    description: string;
}

export type QuestionModel = Model<Question>;

export const QUESTION_MODEL = 'question';

export const QuestionSchema = new Schema({
    type: {
        type: String,
        enum: ['RADIO', 'CHECKBOX', 'TEXT', 'EMAIL', 'PHONE', 'COLOR', 'DATE', 'TIME'],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    choices: {
        type: [String],
        required: false,
    },
    required: {
        type: Boolean,
        default: false,
        required: false,
    },
    description: {
        type: String,
        required: false
    }
});
