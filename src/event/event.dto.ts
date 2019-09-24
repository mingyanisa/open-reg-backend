import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Event } from './event.model';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateEventDTO implements Event {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiModelPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiModelPropertyOptional()
    @IsOptional()
    @IsString()
    location?: string;
}

export class EditEventDTO implements Partial<Event> {
    @ApiModelPropertyOptional()
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    name?: string;

    @ApiModelPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiModelPropertyOptional()
    @IsOptional()
    @IsString()
    location?: string;
}
