import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  idTeam: string;

  @IsString()
  @IsNotEmpty()
  idUserTransmitter: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  @IsOptional()
  status: string;

  @IsString()
  @IsNotEmpty()
  idUserReceiver: string;
}
