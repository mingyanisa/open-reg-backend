import { Controller, Get, Param } from '@nestjs/common';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}

    @Get(':id')
    getForm(@Param() params) {
        return this.formService.findById(params.id);
    }
}
