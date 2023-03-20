import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idTeam: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idUserTransmitter: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idUserReceiver: Types.ObjectId;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: Boolean })
  status: boolean;

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
