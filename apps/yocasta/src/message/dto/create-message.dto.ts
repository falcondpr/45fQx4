import { IsString, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateMessageDto {
  @IsString()
  @IsOptional()
  id_team?: string

  @IsString()
  @IsNotEmpty()
  id_user_transmitter: string

  @IsString()
  @IsNotEmpty()
  content: string

  @IsString()
  @IsNotEmpty()
  id_user_receiver: string
}
