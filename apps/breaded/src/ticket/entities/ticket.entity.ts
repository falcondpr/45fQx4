import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Ticket extends Document {
  @Prop({ type: String, required: true })
  id_user_vendor: string

  @Prop({ type: String, required: true })
  id_user_buyer: string

  @Prop({ type: String, required: true })
  id_product: string

  @Prop({ type: String, required: true })
  id_transaction: string

  @Prop({ type: String, required: true })
  status_ticket: string

  @Prop({ type: String })
  created_at: string

  @Prop({ type: String })
  updated_at: string
}

export const TicketSchema = SchemaFactory.createForClass(Ticket)
