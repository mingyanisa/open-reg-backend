import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config/config.service';

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
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
