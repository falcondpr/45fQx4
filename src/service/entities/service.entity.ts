import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
export class Image {
  @Prop({ type: String, required: true })
  url: string

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date
}

@Schema()
export class Service {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: Array, required: true })
  images: Image[];

  @Prop({ type: Number, required: true })
  priceStart: number;

  @Prop({ type: { city: String, department: String } })
  location: { city: string, department: string };

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;
}
