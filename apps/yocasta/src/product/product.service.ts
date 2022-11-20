import * as dayjs from 'dayjs'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Product, ProductDocument } from './schema/product.schema'
import { CreateProductDTO } from './dto/create-product.dto'
import { UpdateProductDTO } from './dto/update-product.dto'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(dto: CreateProductDTO): Promise<Product> {
    const product = new this.productModel(dto)
    return await product.save()
  }

  async update(id: string, dto: UpdateProductDTO): Promise<Product> {
    const data = { ...dto, updated_at: dayjs().format() }
    const product = await this.productModel.findByIdAndUpdate(id, data, {
      new: true,
    })
    return product
  }

  async delete(id: string): Promise<Product> {
    const product = await this.productModel.findByIdAndDelete(id)
    return product
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productModel.find()
    return products
  }

  async get(id: string): Promise<Product> {
    const product = await this.productModel.findById(id)
    return product
  }

  async getByCategory(value: string): Promise<Product[]> {
    const products = await this.productModel.find()
    const product = products.map((item: Product) => {
      if (item.category.includes(value)) {
        return item
      }
    })
    return product.filter((item) => item !== null && item)
  }
}
