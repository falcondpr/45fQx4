import { IsOptional, IsNumber, IsString } from 'class-validator'

export class UpdateTicketDTO {
  @IsString()
  @IsOptional()
  id_buyer?: string

  @IsString()
  @IsOptional()
  id_vendor?: string

  @IsString()
  @IsOptional()
  code_to_buy_product?: string

  @IsString()
  @IsOptional()
  id_product?: string

  @IsNumber()
  @IsOptional()
  price?: number

  @IsString()
  @IsOptional()
  status?: string
}
