import { NestFactory } from '@nestjs/core';
import { ResourceModule } from './resource/resource.module';
import { SeederService } from './resource/seeder/seeder.service';

async function bootstrap() {
    // tslint:disable-next-line:no-console
    console.log('Running "seed.ts".');
    // tslint:disable-next-line:no-console
    console.log('Please run this file in development environment only.');
    const app = await NestFactory.create(ResourceModule);
    const seeder = app.get(SeederService);
    // await seeder.seedEvents();
    await seeder.seedForms();
    app.close();
}

bootstrap();
