import { Types } from 'mongoose';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  ownerId: Types.ObjectId;

  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsObject()
  location: { city: string; department: string };

  @IsArray()
  tags: [{ text: string; slug: string }];
}
