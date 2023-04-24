import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'typeorm';

import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':param/:value')
  findOne(
    @Param('value') value: string | ObjectId,
    @Param('param') param: string,
  ) {
    return this.productService.findOneBy(value, param);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.productService.remove(id);
  }
}
