import {
    IsString,
    IsArray,
    ValidateNested,
    IsIn,
    IsBoolean,
    IsOptional,
    IsMongoId,
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

export class CreateFormDTO {
    @IsMongoId()
    eventId: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    questions: QuestionDTO[];
}
