import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateTesterDto {
  @IsString()
  @IsOptional()
  name: string

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  email: string
}
