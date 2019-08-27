import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    get mongoUrl(): string {
        const url = process.env.MONGO_URL;
        if (url) {
            return url;
        }
        throw new Error('"MONGO_URL" is not defined');
    }
}
