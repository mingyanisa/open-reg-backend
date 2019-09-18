import {
    IsString,
    IsArray,
    ValidateNested,
    IsIn,
    IsBoolean,
    IsOptional,
} from 'class-validator';
import { QUESTION_TYPES } from './question.model';
import { Type } from 'class-transformer';
export class QuestionDTO {
    @IsIn(QUESTION_TYPES)
    type: string;

    @IsString()
    title: string;

    @IsArray()
    choices: string[];

    @IsOptional()
    @IsBoolean()
    required: boolean;

    @IsOptional()
    @IsString()
    description: string;
}

// tslint:disable-next-line:max-classes-per-file
export class CreateFormDTO {
    // @IsString()
    // eventId: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    questions: QuestionDTO[];
}
