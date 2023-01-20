import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string
}
