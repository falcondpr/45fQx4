import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ type: Array, of: String, required: true })
  members: string[];

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
