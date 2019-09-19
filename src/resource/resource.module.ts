import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';
import { SeederModule } from './seeder/seeder.module';
import { FormModule } from '../form/form.module';
import { EventModule } from '../event/event.module';
import { ResponseModule } from '../response/response.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/open-reg'),
        ConfigModule,
        SeederModule,
        FormModule,
        EventModule,
        ResponseModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class ResourceModule {}
