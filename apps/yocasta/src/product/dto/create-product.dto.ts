import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator'

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  @IsString()
  @IsNotEmpty()
  id_user_owner: string

  @IsArray()
  @IsOptional()
  category?: string[]

  @IsArray()
  @IsNotEmpty()
  images: [{ url: string; description: string; id: string }]

  @IsObject()
  @IsNotEmpty()
  image: { url: string; description: string }

  @IsString()
  @IsNotEmpty()
  status: string

  @IsString()
  @IsNotEmpty()
  id_product: string
}
