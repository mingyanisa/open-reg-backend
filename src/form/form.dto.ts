import { IsString } from 'class-validator';

export class CreateFormDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;
}
