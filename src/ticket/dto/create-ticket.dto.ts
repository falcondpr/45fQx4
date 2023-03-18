import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  idUserVendor: string;

  @IsString()
  @IsNotEmpty()
  idUserBuyer: string;

  @IsString()
  @IsNotEmpty()
  idServiceOrProduct: string;

  @IsString()
  @IsNotEmpty()
  statusTicket: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;
}
