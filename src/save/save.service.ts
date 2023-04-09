import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Save, SaveDocument } from './entities/save.entity';
import { CreateSaveDto, UpdateSaveDto } from './dto';

@Injectable()
export class SaveService {
  constructor(
    @InjectModel(Save.name) private readonly saveModel: Model<SaveDocument>,
  ) {}

  create(dto: CreateSaveDto) {
    return this.saveModel.create(dto);
  }

  findAllByUser(id: string) {
    return this.saveModel.find({ idUser: id });
  }

  findOne(id: string) {
    return this.saveModel.findById(id);
  }

  update(id: string, dto: UpdateSaveDto) {
    return this.saveModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.saveModel.findByIdAndDelete(id);
  }
}
