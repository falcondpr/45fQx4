import { IsNotEmpty, IsString } from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  idUserReceiver: string;
}
