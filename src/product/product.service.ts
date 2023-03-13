import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto, UpdateProductDto } from './dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}
  
  create(dto: CreateProductDto): Promise<ProductDocument> {
    return this.productModel.create({
      ...dto,
      slug: dto.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replaceAll(' ', ('-'))
    });
  }

  findAll(): Promise<ProductDocument[]> {
    return this.productModel.find();
  }

  findOne(param: string, value: string): Promise<ProductDocument> {
    return this.productModel.findOne({ [param]: value });
  }

  update(id: string, dto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, {
      ...dto,
      updatedAt: new Date().toISOString()
    }, { new: true });
  }

  remove(id: string): Promise<ProductDocument> {
    return this.productModel.findByIdAndDelete(id);
  }
}
