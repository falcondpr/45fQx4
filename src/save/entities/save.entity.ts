import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SaveDocument = HydratedDocument<Save>;

@Schema()
export class Save {
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idProductOrService: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idUser: Types.ObjectId;

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;
}

export const SaveSchema = SchemaFactory.createForClass(Save);
