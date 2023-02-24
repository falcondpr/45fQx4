import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Message extends Document {
  @Prop({ type: String, required: true })
  id_team: string;

  @Prop({ type: String, required: true })
  id_user_transmitter: string;

  @Prop({ type: String, required: true })
  id_user_receiver: string;

  @Prop({ type: String, required: true })
  content: string;

  @Prop({ type: String })
  created_at: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
