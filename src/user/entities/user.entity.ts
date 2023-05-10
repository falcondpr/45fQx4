import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { ObjectId } from 'typeorm';

@ObjectType()
export class User {
  @Field(() => ObjectId)
  _id: ObjectId;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6)
  fullname: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  @MinLength(6)
  password: string;

  @Field(() => String)
  type: string;

  @Field(() => Object, { nullable: true })
  verified: { value: boolean; updatedAt: Date };

  @Field(() => Object, { nullable: true })
  banner: { url: string; updatedAt: Date };

  @Field(() => Object, { nullable: true })
  avatar: { url: string; approved: boolean; updatedAt: Date };

  @Field(() => Object, { nullable: true })
  premium: { value: boolean; updatedAt: Date };

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
