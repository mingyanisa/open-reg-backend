import { Model, Document, Schema } from 'mongoose';

export interface Response extends Document {
    formId: string;
    userId: string;
    answers: string[];
}

export type ResponseModel = Model<Response>;

export const RESPONSE_MODEL = 'response';

export const ResponseSchema = new Schema({
    formId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    answers: {
        type: [String],
        required: true,
    },
});
