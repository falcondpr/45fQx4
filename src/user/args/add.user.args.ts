import { InputType, Field } from '@nestjs/graphql';
import { AVATAR_SCHEMA, BANNER_SCHEMA } from './user.args';

@InputType()
export class AddUserArgs {
  @Field(() => String)
  fullname: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => AVATAR_SCHEMA)
  avatar: { url: string; isApproved: boolean; updatedAt: Date };

  @Field(() => BANNER_SCHEMA)
  banner: { url: string; updatedAt: Date };

  @Field(() => BANNER_SCHEMA)
  isVerified: { isValid: boolean; updatedAt: Date };

  @Field(() => BANNER_SCHEMA)
  isPremium: { isValid: boolean; updatedAt: Date };

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
