import {
    IsString,
    IsArray,
    ValidateNested,
    IsIn,
    IsBoolean,
    IsOptional,
    IsMongoId,
    IsInt,
} from 'class-validator';
import { QUESTION_TYPES, Question, QuestionTypes } from './question.model';
import { Type } from 'class-transformer';
import { Form } from './form.model';
import { FormGroup } from './formGroup.model';
export class QuestionDTO implements Question {
    @IsIn(QUESTION_TYPES)
    type: QuestionTypes;

    @IsString()
    title: string;

    @IsInt()
    group: number;

    @IsInt()
    order: number;

    @IsOptional()
    @IsArray()
    choices: string[];

    @IsOptional()
    @IsBoolean()
    required: boolean;

    @IsOptional()
    @IsString()
    description: string;
}

export class FormGroupDTO implements FormGroup {
    @IsInt()
    order: number;

    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}

export class CreateFormDTO implements Form {
    @IsMongoId()
    eventId: string;

    @IsString()
    title: string;

    @ValidateNested({ each: true })
    @Type(() => FormGroupDTO)
    groups: FormGroupDTO[];

    @IsOptional()
    @IsString()
    description: string;

    @ValidateNested({ each: true })
    @Type(() => QuestionDTO)
    questions: QuestionDTO[];
}
