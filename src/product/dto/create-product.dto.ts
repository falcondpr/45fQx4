import {
  IsOptional,
  IsObject,
  IsArray,
  IsPositive,
  IsNumber,
  IsString,
  IsNotEmpty,
} from 'class-validator';
import { STATUS_POST, STATUS_PRODUCT } from '../enum/product.enum';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  businessId?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsString()
  @IsNotEmpty()
  productStatus: STATUS_PRODUCT;

  @IsObject()
  @IsNotEmpty()
  postStatus: { value: STATUS_POST; updatedAt: Date };

  @IsObject()
  @IsNotEmpty()
  details: { brand: string; model: string; year?: number };

  @IsObject()
  location: { city: string; country: string; state: string };

  @IsArray()
  @IsOptional()
  tags?: string[];
}
