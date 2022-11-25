import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common'
import { Response } from 'express'

import { ProductService } from './product.service'
import { CreateProductDTO } from './dto/create-product.dto'
import { UpdateProductDTO } from './dto/update-product.dto'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateProductDTO) {
    const product = await this.productService.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Producto creado',
      success: true,
      data: product,
    })
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: UpdateProductDTO,
    @Param('id') id: string,
  ) {
    const product = await this.productService.update(id, dto)
    return res.status(HttpStatus.OK).json({
      message: 'Producto actualizado',
      success: true,
      data: product,
    })
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const product = await this.productService.delete(id)
    return res.status(HttpStatus.OK).json({
      message: 'Producto eliminado',
      success: true,
      data: product,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const products = await this.productService.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'Productos',
      success: true,
      data: products,
    })
  }

  @Get('/:id')
  async get(@Res() res: Response, @Param('id') id: string) {
    const product = await this.productService.get(id)
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      data: product,
    })
  }

  @Get('/category/:category')
  async getByCategory(
    @Res() res: Response,
    @Param('category') category: string,
  ) {
    const products = await this.productService.getByCategory(category)
    return res.status(HttpStatus.OK).json({
      message: `Productos de ${category}`,
      success: true,
      data: products,
    })
  }

  @Get('/id_user/:id_user')
  async getByUser(
    @Res() res: Response,
    @Param('id_user') id_user_owner: string,
  ) {
    const products = await this.productService.getByUser(id_user_owner)
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: products,
    })
  }
}
