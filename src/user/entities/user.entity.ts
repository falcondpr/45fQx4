import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';
import {
  AvatarType,
  BannerType,
  PremiumType,
  VerifiedType,
} from '../dto/update-user.dto';

@ObjectType('User')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Field(() => VerifiedType, { nullable: true })
  verified: object;

  @Field(() => BannerType, { nullable: true })
  banner: object;

  @Field(() => AvatarType, { nullable: true })
  avatar: object;

  @Field(() => PremiumType, { nullable: true })
  premium: object;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
