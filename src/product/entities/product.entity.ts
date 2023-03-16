import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Types.ObjectId, required: true })
  ownerId: Types.ObjectId;

  @Prop({ type: Array(String), required: true })
  images: string[];

  @Prop({ type: String, default: 'NEW' })
  statusProduct: string;

  @Prop({
    type: { value: String, updatedAt: Date },
    default: {
      value: 'AVAILABLE',
      updatedAt: new Date().toISOString(),
    },
    _id: false,
  })
  statusSale: { value: string; updatedAt: Date };

  @Prop({
    type: { city: String, department: String },
    required: true,
    _id: false,
  })
  location: { city: string; department: string };

  @Prop({ type: Array({ text: String, slug: String }) })
  tags: [{ text: string; slug: string }];

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
