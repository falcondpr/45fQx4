import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type MessageDocument = Message & Document

@Schema()
export class Message {
  @Prop({ type: String, required: true })
  id_team: string

  @Prop({ type: String, required: true })
  id_user_transmitter: string

  @Prop({ type: String, required: true })
  id_user_receiver: string

  @Prop({ type: Date, default: Date.now })
  created_at: Date
}

export const MessageSchema = SchemaFactory.createForClass(Message)
