import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {
  _id: Types.ObjectId;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Array(String), required: true })
  images: string[];

  @Prop({ type: Number, required: true })
  priceStart: number;

  @Prop({ type: { city: String, department: String } })
  location: { city: string; department: string };

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: Array({ text: String, slug: String }) })
  tags: [{ text: string; slug: string }];

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
