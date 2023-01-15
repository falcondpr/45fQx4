import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// const members: string[]

@Schema()
export class Team extends Document {
  @Prop({ type: Array, of: String, required: true })
  members: string[]

  @Prop({ type: String })
  created_at: string
}

export const TeamSchema = SchemaFactory.createForClass(Team)
