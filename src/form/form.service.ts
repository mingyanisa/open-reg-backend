import { Injectable } from '@nestjs/common';
import { FORM_MODEL, FormModel } from './form.model';
import { InjectModel } from '@nestjs/mongoose';
import { QUESTION_MODEL, QuestionModel } from './question.model';
import { CreateFormDTO } from './form.dto';

@Injectable()
export class FormService {
    constructor(
        @InjectModel(FORM_MODEL) private readonly formModel: FormModel,
        @InjectModel(QUESTION_MODEL)
        private readonly questionModel: QuestionModel,
    ) {}

    async createForm(form: CreateFormDTO) {
        const newForm = new this.formModel(form);
        return await newForm.save();
    }

    async findAll() {
        const forms = await this.formModel.find().exec();
        return forms;
    }

    findById(id: string) {
        return this.formModel.findById(id).exec();
    }
}
