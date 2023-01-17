import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator'

export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  price: number

  @IsString()
  @IsNotEmpty()
  id_user_vendor: string

  @IsString()
  @IsNotEmpty()
  id_user_buyer: string

  @IsString()
  @IsNotEmpty()
  id_service_or_product: string
}
