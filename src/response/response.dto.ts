import { IsString, IsMongoId } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateResponseDTO {
    @ApiModelProperty()
    @IsMongoId()
    formId: string;

    @ApiModelProperty()
    @IsMongoId()
    userId: string;

    @ApiModelProperty()
    @IsString({ each: true })
    answers: string[];
}
