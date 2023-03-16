import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { CreateServiceDto, UpdateServiceDto } from './dto';
import { Service, ServiceDocument } from './entities/service.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service.name)
    private readonly serviceModel: Model<ServiceDocument>,
  ) {}

  create(dto: CreateServiceDto) {
    return this.serviceModel.create(dto);
  }

  findAll() {
    return this.serviceModel.find();
  }

  findOne(id: string) {
    return this.serviceModel.findById(id);
  }

  findAllByCategory(category: string) {
    return this.serviceModel.find({ category: category.toUpperCase() });
  }

  update(id: string, dto: UpdateServiceDto) {
    return this.serviceModel.findByIdAndUpdate(
      id,
      {
        ...dto,
        updatedAt: new Date().toISOString(),
      },
      { new: true },
    );
  }

  remove(id: string) {
    return this.serviceModel.findByIdAndDelete(id);
  }
}
