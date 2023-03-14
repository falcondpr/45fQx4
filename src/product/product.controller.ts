import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductDocument } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  create(@Body() createProductDto: CreateProductDto): Promise<ProductDocument> {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(): Promise<ProductDocument[]> {
    return this.productService.findAll();
  }

  @Get('param/:param/:value')
  findOne(
    @Param('param') param: string,
    @Param('value') value: string
  ): Promise<ProductDocument> {
    return this.productService.findOne(param, value);
  }

  @Get('status-product/:status')
  findManyByStatusProduct(
    @Param('status') status: string,
  ): Promise<ProductDocument[]> {
    return this.productService.findManyByStatusProduct(status);
  }

  @Get('status-sale/:status')
  findManyByStatusSale(
    @Param('status') status: string,
  ): Promise<ProductDocument[]> {
    return this.productService.findManyByStatusSale(status);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<ProductDocument> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ProductDocument> {
    return this.productService.remove(id);
  }
}
