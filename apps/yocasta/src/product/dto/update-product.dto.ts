import {
  IsArray,
  IsOptional,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator'

export class UpdateProductDTO {
  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  id_user_owner?: string

  @IsArray()
  @IsOptional()
  category?: string[]

  @IsArray()
  @IsOptional()
  images?: [{ url: string; description: string; id: string }]

  @IsObject()
  @IsOptional()
  image?: { url: string; description: string }

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  id_product?: string
}
