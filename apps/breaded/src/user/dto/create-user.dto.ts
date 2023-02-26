import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string

  @IsString()
  @IsNotEmpty()
  username: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  avatar: { url_image: string is_approved: boolean updated_at: string }

  @IsOptional()
  banner: { url_image: string updated_at: string }

  @IsOptional()
  is_verified: { is_valid: string updated_at: string }

  @IsOptional()
  is_premium: { is_valid: boolean updated_at: string }
}
