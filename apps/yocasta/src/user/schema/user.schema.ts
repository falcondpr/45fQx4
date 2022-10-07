import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  username: string

  @Prop({ type: String, required: true })
  email: string

  @Prop({ type: String, required: true })
  password: string

  @Prop({ type: Date, default: Date.now })
  created_at: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
