import { IsString, IsMongoId } from 'class-validator';

export class CreateResponseDTO {
    @IsMongoId()
    formId: string;

    @IsMongoId()
    userId: string;

    @IsString({ each: true })
    answers: string[];
}
