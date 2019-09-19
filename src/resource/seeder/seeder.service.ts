import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
    QUESTION_MODEL,
    QuestionModel,
    Question,
} from '../../form/question.model';
import { FORM_MODEL, FormModel, Form } from '../../form/form.model';
import { InjectModel } from '@nestjs/mongoose';
import { EVENT_MODEL, EventModel, Event } from '../../event/event.model';
import { RESPONSE_MODEL, ResponseModel } from '../../response/response.model';
import { USER_MODEL, UserModel } from '../../user/user.model';
import * as faker from 'faker';

@Injectable()
export class SeederService {
    readonly ENTRIES = 20;

    constructor(
        @InjectModel(FORM_MODEL) private readonly formModel: FormModel,
        @InjectModel(QUESTION_MODEL)
        private readonly questionModel: QuestionModel,
        @InjectModel(EVENT_MODEL) private readonly eventModel: EventModel,
        @InjectModel(RESPONSE_MODEL)
        private readonly responseModel: ResponseModel,
        @InjectModel(USER_MODEL) private readonly userModel: UserModel,
    ) {}

    async seed() {
        //
    }

    async seedEvents() {
        Logger.log('Go seedEvents()');
        Logger.log('Start');
        const events: Event[] = [];
        for (let i = 0; i < this.ENTRIES; i++) {
            const event: Event = {
                name:
                    'E: ' +
                    faker.commerce.productName() +
                    ' ' +
                    faker.random.uuid(),
                description: faker.lorem.paragraph(),
                location: faker.address.city(),
            };
            events.push(event);
        }
        Logger.log('Inserting');
        await this.eventModel.insertMany(events);
        const data = await this.eventModel.find({}, (err, d) => {
            d.forEach(dd => {
                // @ts-ignore
                Logger.log(dd.name);
            });
        });
        Logger.log('Entries: ' + data.length);
        Logger.log('Done');
    }

    async seedForms() {
        Logger.log('Go seedForms()');
        let events = await this.eventModel.find({}, '_id');

        if (events.length <= 0) {
            await this.seedEvents();
            events = await this.eventModel.find({}, '_id');
        }

        const forms: Form[] = [];

        events.forEach(ee => {
            const form: Form = {
                eventId: ee._id,
                questions: [],
                title: 'F: ' + faker.commerce.productName() + '?',
                description:
                    Math.round(Math.random()) === 0
                        ? faker.lorem.sentence()
                        : '',
            };
            forms.push(form);
        });

        await this.formModel.insertMany(forms);
        const data = await this.formModel.find({}, (err, d) => {
            d.forEach(dd => {
                // @ts-ignore
                Logger.log(dd.title);
            });
        });
        Logger.log('Entries: ' + data.length);
        Logger.log('Done');
    }

    async seedResponses() {
        // Depends: QUESTION
        Logger.log('Seeding "RESPONSE"');
    }

    async seedUsers() {
        Logger.log('Seeding "USER"');
    }
}
