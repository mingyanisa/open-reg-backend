import { Model, Document, Schema } from 'mongoose';

export interface Event {
    name: string;
    description?: string;
    location?: string;
}

export interface EventDocument extends Document, Event {}

export type EventModel = Model<EventDocument>;

export const EVENT_MODEL = 'event';

export const EventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
});
