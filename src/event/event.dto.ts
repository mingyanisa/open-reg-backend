import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Event } from './event.model';

export class CreateEventDTO implements Event {
    @IsNotEmpty()
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
    @IsNotEmpty()
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
