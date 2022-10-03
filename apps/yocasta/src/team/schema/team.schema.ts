import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TeamDocument = Team & Document

@Schema()
export class Team {
  @Prop({ type: [], required: true })
  members: string[]

  @Prop({ type: Date, default: Date.now })
  created_at: Date
}

export const teamSchema = SchemaFactory.createForClass(Team)
