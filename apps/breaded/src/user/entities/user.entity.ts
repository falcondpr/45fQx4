import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import {
  AVATAR_SCHEMA,
  BANNER_SCHEMA,
  IS_PREMIUM_SCHEMA,
  IS_VERIFIED_SCHEMA,
} from './custom.schema'

@Schema()
export class User extends Document {
  @Prop({ type: String, required: true })
  fullname: string

  @Prop({ type: String, required: true })
  username: string

  @Prop({ type: String, required: true })
  email: string

  @Prop({ type: String, required: true })
  password: string

  @Prop({ type: AVATAR_SCHEMA, _id: false })
  avatar: { url_image: string is_approved: boolean updated_at: string }

  @Prop({ type: BANNER_SCHEMA, _id: false })
  banner: { url_image: string updated_at: string }

  @Prop({ type: IS_VERIFIED_SCHEMA, _id: false })
  is_verified: { is_valid: string updated_at: string }

  @Prop({ type: IS_PREMIUM_SCHEMA, _id: false })
  is_premium: { is_valid: boolean updated_at: string }

  @Prop({ type: String })
  created_at: string

  @Prop({ type: String })
  updated_at: string
}

export const UserSchema = SchemaFactory.createForClass(User)
