import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator'

export class CreateTicketDto {
  @IsString()
  @IsOptional()
  _id?: string

  @IsString()
  @IsNotEmpty()
  id_user_vendor: string

  @IsString()
  @IsNotEmpty()
  id_user_buyer: string

  @IsString()
  @IsNotEmpty()
  id_product: string

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: string

  @IsString()
  @IsNotEmpty()
  status_ticket: string
}
