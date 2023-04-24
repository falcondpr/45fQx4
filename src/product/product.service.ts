import { ObjectId, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId as ObjectID } from 'mongodb';

import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  create(dto: CreateProductDto) {
    return this.productRepo.save(dto);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOneBy(value: string | ObjectId, param: string) {
    if (ObjectID.isValid(value) && param === 'id') {
      return this.productRepo.findOneBy({ _id: new ObjectID(value) });
    }

    return this.productRepo.findOneBy({ [param]: value });
  }

  async update(id: ObjectId, dto: UpdateProductDto) {
    const product = await this.findOneBy(id, 'id');
    const updatedDTO = {
      ...dto,
      updatedAt: new Date().toISOString(),
    };
    this.productRepo.merge(product, updatedDTO);
    return this.productRepo.save(product);
  }

  remove(id: ObjectId) {
    return this.productRepo.delete(id);
  }
}
