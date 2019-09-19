import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import {
    QUESTION_MODEL,
    QuestionModel,
    Question,
    QUESTION_TYPES,
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
        Logger.log('[EventSeeder] Start');
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
        Logger.log('[EventSeeder] Inserting');
        await this.eventModel.insertMany(events);
        const data = await this.eventModel.find({}, (err, d) => {
            d.forEach(dd => {
                // @ts-ignore
                Logger.log('[EventSeeder] ' + dd.name);
            });
        });
        Logger.log('[EventSeeder] Entries: ' + data.length);
        Logger.log('[EventSeeder] Done');
    }

    async seedForms() {
        Logger.log('[FormSeeder] Starting');
        let events = await this.eventModel.find({}, '_id');

        if (events.length <= 0) {
            await this.seedEvents();
            events = await this.eventModel.find({}, '_id');
        }

        const forms: Form[] = [];

        events.forEach(ee => {
            const questions: Question[] = [];
            for (let i = 0; i < this.ENTRIES; i++) {
                const type = faker.random.arrayElement(QUESTION_TYPES);
                const choices: string[] = [];
                if (type === 'RADIO' || type === 'CHECKBOX') {
                    for (let i = 0; i < 4; i++) {
                        choices.push(
                            i + 1 + ': ' + faker.commerce.productName(),
                        );
                    }
                }
                const question: Question = {
                    // @ts-ignore
                    type,
                    order: i + 1,
                    title: 'Q: ' + faker.commerce.productName(),
                    choices: choices.length > 0 ? choices : null,
                    required: Math.round(Math.random()) === 0,
                    description:
                        Math.round(Math.random()) === 0
                            ? faker.lorem.sentence()
                            : '',
                };
                questions.push(question);
            }
            const form: Form = {
                eventId: ee._id,
                questions,
                title: 'F: ' + faker.commerce.productName() + '?',
                description:
                    Math.round(Math.random()) === 0
                        ? faker.lorem.sentence()
                        : '',
            };
            forms.push(form);
        });

        Logger.log('[FormSeeder] Inserting');
        await this.formModel.insertMany(forms);
        const data = await this.formModel.find({}, (err, d) => {
            d.forEach(dd => {
                // @ts-ignore
                Logger.log(
                    // @ts-ignore
                    dd.title + ' (' + dd.questions.length + ' Questions)',
                );
            });
        });
        Logger.log('[FormSeeder] Entries: ' + data.length);
        Logger.log('[FormSeeder] Done');
    }

    async seedResponses() {
        // Depends: FORM
        Logger.log('Seeding "RESPONSE"');
    }

    async seedUsers() {
        Logger.log('Seeding "USER"');
    }
}
