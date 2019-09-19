import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDTO } from './form.dto';
import { DebugGuard } from '../debug.guard';

@Controller('form')
export class FormController {
    constructor(private readonly formService: FormService) {}

    @UseGuards(DebugGuard)
    @Get('all')
    getAll() {
        return this.formService.findAll();
    }

    @Get(':id')
    getForm(@Param('id') id: string) {
        return this.formService.findById(id);
    }

    @Post()
    createForm(@Body() createForm: CreateFormDTO) {
        return this.formService.createForm(createForm);
    }
}
