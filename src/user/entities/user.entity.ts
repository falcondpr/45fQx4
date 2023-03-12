import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  fullname: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({
    type: { url: String, isApproved: Boolean, updatedAt: Date },
    default: {
      url: '',
      updatedAt: new Date().toISOString(),
      isApproved: false,
    },
    _id: false,
  })
  avatar: { url: string; isApproved: boolean; updatedAt: Date };

  @Prop({
    type: { url: String, updatedAt: Date },
    default: {
      url: '',
      updatedAt: new Date().toISOString(),
    },
    _id: false,
  })
  banner: { url: string; updatedAt: Date };

  @Prop({
    type: { isValid: Boolean, updatedAt: Date },
    default: {
      isValid: false,
      updatedAt: new Date().toISOString(),
    },
    _id: false,
  })
  isPremium: { isValid: boolean; updatedAt: Date };

  @Prop({
    type: { isValid: Boolean, updatedAt: Date },
    default: {
      isValid: false,
      updatedAt: new Date().toISOString(),
    },
    _id: false,
  })
  isVerified: { isValid: boolean; updatedAt: Date };

  @Prop({ type: Date, default: new Date().toISOString() })
  createdAt: Date;

  @Prop({ type: Date, default: new Date().toISOString() })
  updatedAt: Date;

  _id: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
