import { Injectable } from '@nestjs/common';
import { RESPONSE_MODEL, ResponseModel } from './response.model';
import { InjectModel } from '@nestjs/mongoose';
import { CreateResponseDTO } from './response.dto';

@Injectable()
export class ResponseService {
    constructor(
        @InjectModel(RESPONSE_MODEL)
        private readonly responseModel: ResponseModel,
    ) {}

    async createResponse(response: CreateResponseDTO) {
        const newResponse = new this.responseModel(response);
        return await newResponse.save();
    }

    findById(id: string) {
        return this.responseModel.findById(id).exec();
    }
}
