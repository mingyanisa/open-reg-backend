import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDTO {
    @ApiModelProperty()
    @IsString()
    username: string;

    @ApiModelProperty()
    @IsString()
    password: string;
}
