import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    get(key: string) {
        const value = process.env[key];
        if (!value) {
            throw new Error(`"${key}" is not defined`);
        }
        return value;
    }
    get mongoUrl(): string {
        return this.get('MONGO_URL');
    }

    get secret(): string {
        return this.get('SECRET');
    }
}
