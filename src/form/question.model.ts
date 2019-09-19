import { Model, Document, Schema } from 'mongoose';

export enum QuestionTypes {
    RADIO,
    CHECKBOX,
    TEXT,
    EMAIL,
    PHONE,
    COLOR,
    DATE,
    TIME,
}

export interface Question {
    type: QuestionTypes;
    title: string;
    choices: string[];
    required: boolean;
    description: string;
}

export interface QuestionDocument extends Document {}

export type QuestionModel = Model<QuestionDocument>;

export const QUESTION_MODEL = 'question';
export const QUESTION_TYPES = [
    'RADIO',
    'CHECKBOX',
    'TEXT',
    'EMAIL',
    'PHONE',
    'COLOR',
    'DATE',
    'TIME',
];

export const QuestionSchema = new Schema({
    type: {
        type: String,
        enum: QUESTION_TYPES,
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
        required: false,
    },
});
