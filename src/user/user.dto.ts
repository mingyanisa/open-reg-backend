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

export class CreateUserFromChulaSsoDTO {
    @IsString()
    chulaId: string;

    @IsString()
    faculty: string;

    @IsString()
    role: string;
}
