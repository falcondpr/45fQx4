import * as dayjs from 'dayjs'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  description: string

  @Prop({ type: Number, required: true })
  price: number

  @Prop({ type: String, required: true })
  id_user_owner: string

  @Prop({ type: Array, required: true })
  category: string[]

  @Prop({
    type: [{ url: String, description: String, id: String }],
    required: true,
  })
  images: [{ url: string; description: string; id: string }]

  @Prop({ type: { url: String, description: String }, required: true })
  image: { url: string; description: string }

  // => VENDIDO, DISPONIBLE
  @Prop({ type: String, default: 'FREE' })
  status: string

  @Prop({ type: String, required: true })
  id_product: string

  @Prop({ type: String, default: dayjs().format() })
  created_at: string

  @Prop({ type: String, default: dayjs().format() })
  updated_at: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
