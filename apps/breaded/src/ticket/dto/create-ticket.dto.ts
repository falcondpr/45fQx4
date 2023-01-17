import { IsNotEmpty, IsString } from 'class-validator'

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  id_user_vendor: string

  @IsString()
  @IsNotEmpty()
  id_user_buyer: string

  @IsString()
  @IsNotEmpty()
  id_product: string

  @IsString()
  @IsNotEmpty()
  id_transaction: string

  @IsString()
  @IsNotEmpty()
  status_ticket: string
}
