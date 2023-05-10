import { PartialType } from '@nestjs/mapped-types';
import { IsObject, IsOptional, IsString } from 'class-validator';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { RegisterUserDto } from './create-user.dto';

@ObjectType()
export class VerifiedType {
  @Field(() => Boolean)
  value: boolean;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class PremiumType {
  @Field(() => Boolean)
  value: boolean;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class BannerType {
  @Field(() => String)
  url: string;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class AvatarType {
  @Field(() => String)
  url: string;

  @Field(() => Boolean)
  approved: boolean;

  @Field(() => Date)
  updatedAt: Date;
}

@InputType()
export class UpdateUserDto extends PartialType(RegisterUserDto) {
  @Field(() => VerifiedType, { nullable: true })
  verified: object;

  @Field(() => Object)
  @IsOptional()
  @IsObject()
  banner: { url: string; updatedAt: Date };

  @Field(() => String)
  @IsOptional()
  @IsString()
  type: string;

  @Field(() => Object)
  @IsOptional()
  @IsObject()
  avatar: { url: string; approved: boolean; updatedAt: Date };

  @Field(() => Object)
  @IsOptional()
  @IsObject()
  premium: { value: boolean; updatedAt: Date };
}
