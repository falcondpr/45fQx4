import { Document } from 'mongoose'
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose'

@Schema()
export class Tester extends Document {
  @Prop({ type: 'boolean', default: true })
  isActive: boolean

  @Prop({ type: 'string' })
  username: string

  @Prop({ type: 'string', unique: true, required: true })
  email: string

  @Prop({ type: 'string' })
  name: string

  @Prop({ type: 'string', default: new Date().toISOString() })
  created_at: string
}

export const TesterSchema = SchemaFactory.createForClass(Tester)
