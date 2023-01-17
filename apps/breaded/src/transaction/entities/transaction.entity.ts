import { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Transaction extends Document {
  @Prop({ type: Number, required: true })
  price: number

  @Prop({ type: String, required: true })
  id_user_vendor: string

  @Prop({ type: String, required: true })
  id_user_buyer: string

  @Prop({ type: String, required: true })
  id_service_or_product: string

  @Prop({ type: String })
  created_at: string
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction)
