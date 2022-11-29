import * as dayjs from 'dayjs'
import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TicketDocumet = Ticket & Document

@Schema()
export class Ticket {
  @Prop({ type: String, required: true })
  id_buyer: string

  @Prop({ type: String, required: true })
  id_vendor: string

  @Prop({ type: String, required: true })
  code_to_buy_product: string

  @Prop({ type: String, required: true })
  id_product: string

  @Prop({ type: Number, required: true })
  price: number

  @Prop({ type: String, default: 'FREE' })
  status: string

  @Prop({ type: String, default: dayjs().format() })
  created_at: string

  @Prop({ type: String, default: dayjs().format() })
  updated_at: string
}

export const TicketSchema = SchemaFactory.createForClass(Ticket)
