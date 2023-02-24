import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  id_team: string;

  @IsString()
  @IsNotEmpty()
  id_user_transmitter: string;

  @IsString()
  @IsNotEmpty()
  id_user_receiver: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
