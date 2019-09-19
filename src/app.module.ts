import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { ResponseModule } from './response/response.module';
import { FormModule } from './form/form.module';
import { SeederModule } from './resources/seeder/seeder.module';
import { SeederService } from './resource/seeder/seeder.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.mongoUrl,
                useNewUrlParser: true,
                useFindAndModify: false,
            }),
            inject: [ConfigService],
        }),
        ConfigModule,
        UserModule,
        AuthModule,
        EventModule,
        ResponseModule,
        FormModule,
        SeederModule,
    ],
    controllers: [AppController],
    providers: [SeederService],
})
export class AppModule {}
