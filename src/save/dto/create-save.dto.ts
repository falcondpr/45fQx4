import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSaveDto {
  @IsString()
  @IsNotEmpty()
  idProductOrService: string;

  @IsString()
  @IsNotEmpty()
  idUser: string;
}
