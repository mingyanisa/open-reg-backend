import { IsString, IsOptional, Length } from 'class-validator';
import { Event } from './event.model';

export class CreateEventDTO implements Event {
    @Length(1)
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    location?: string;
}

export class EditEventDTO implements Partial<Event> {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    location?: string;
}
