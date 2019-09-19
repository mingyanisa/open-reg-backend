import { Model, Document, Schema } from 'mongoose';
import { FORM_MODEL } from '../form/form.model';
import { USER_MODEL } from '../user/user.model';

export interface Response extends Document {
    formId: string;
    userId: string;
    answers: string;
}

export type ResponseModel = Model<Response>;

export const RESPONSE_MODEL = 'response';

export const ResponseSchema = new Schema({
    formId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: FORM_MODEL,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: USER_MODEL,
    },
    answers: {
        type: Map,
        required: true,
    },
});
