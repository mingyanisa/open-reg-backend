import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FORM_MODEL, FormSchema } from '../../form/form.model';
import { QUESTION_MODEL, QuestionSchema } from '../../form/question.model';
import { EVENT_MODEL, EventSchema } from '../../event/event.model';
import { RESPONSE_MODEL, ResponseSchema } from '../../response/response.model';
import { USER_MODEL, UserSchema } from '../../user/user.model';

@Module({
    imports: [
        // Literally everything
        MongooseModule.forFeature([
            { name: FORM_MODEL, schema: FormSchema },
            { name: QUESTION_MODEL, schema: QuestionSchema },
            { name: EVENT_MODEL, schema: EventSchema },
            { name: RESPONSE_MODEL, schema: ResponseSchema },
            { name: USER_MODEL, schema: UserSchema },
        ]),
    ],
    providers: [SeederService],
    exports: [SeederService],
})
export class SeederModule {}
