import {
  IsOptional,
  IsObject,
  IsArray,
  IsPositive,
  IsNumber,
  IsString,
  IsNotEmpty,
} from 'class-validator';

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
  productStatus: string;

  @IsObject()
  @IsNotEmpty()
  status: { value: string; updatedAt: Date };

  @IsObject()
  @IsNotEmpty()
  details: { brand: string; model: string; year?: number };

  @IsObject()
  location: { city: string; country: string; state: string };

  @IsArray()
  @IsOptional()
  tags?: string[];
}
