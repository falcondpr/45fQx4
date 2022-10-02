import { IsString, IsOptional } from 'class-validator'

export class UpdateMessageDto {
  @IsString()
  @IsOptional()
  id_team: string

  @IsString()
  @IsOptional()
  id_user_transmitter: string

  @IsString()
  @IsOptional()
  id_user_receiver: string
}
