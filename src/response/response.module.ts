import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RESPONSE_MODEL, ResponseSchema } from './response.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: RESPONSE_MODEL, schema: ResponseSchema },
        ]),
    ],
    providers: [ResponseService],
    controllers: [ResponseController],
})
export class ResponseModule {}
