import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  @IsNotEmpty()
  idTeam: number;

  @IsNumber()
  @IsNotEmpty()
  idUserTransmitter: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  @IsOptional()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  idUserReceiver: number;
}
