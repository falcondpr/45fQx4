import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateTicketDTO {
  @IsString()
  @IsNotEmpty()
  id_buyer: string

  @IsString()
  @IsNotEmpty()
  id_vendor: string

  @IsString()
  @IsNotEmpty()
  code_to_buy_product: string

  @IsString()
  @IsNotEmpty()
  id_product: string

  @IsNumber()
  @IsNotEmpty()
  price: number
}
