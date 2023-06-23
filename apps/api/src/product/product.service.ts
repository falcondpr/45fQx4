import { Injectable } from '@nestjs/common';

import { IProduct } from '@sura/interfaces';
import { PrismaService } from '@sura/prisma';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(dto: IProduct) {
    return this.prisma.product.create({
      data: {...dto }
    });
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: IProduct) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
