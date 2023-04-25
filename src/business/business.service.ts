import { ObjectId as ObjectID } from 'mongodb';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';

import { CreateBusinessDto, UpdateBusinessDto } from './dto';
import { Business } from './entities/business.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business) private businessRepo: Repository<Business>,
  ) {}

  create(dto: CreateBusinessDto) {
    return this.businessRepo.save(dto);
  }

  findAll() {
    return this.businessRepo.find();
  }

  async findOneBy(param: string, value: ObjectId | string): Promise<Business> {
    if (ObjectID.isValid(value) && param === 'id') {
      return this.businessRepo.findOneByOrFail({ _id: new ObjectID(value) });
    }

    return this.businessRepo.findOneByOrFail({ [param]: value });
  }

  async update(id: ObjectId, dto: UpdateBusinessDto) {
    const business = await this.findOneBy('id', id);
    const updatedDTO = {
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.businessRepo.merge(business, updatedDTO);
    return this.businessRepo.save(business);
  }

  remove(id: ObjectId) {
    return this.businessRepo.delete(id);
  }
}
