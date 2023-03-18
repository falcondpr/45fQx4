import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  _id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idUserVendor: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idUserBuyer: Types.ObjectId;

  @Prop({ type: Types.ObjectId, required: true })
  idServiceOrProduct: Types.ObjectId;

  @Prop({ type: String, required: true })
  statusTicket: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
