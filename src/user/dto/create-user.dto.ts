import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType('RegisterUserDto')
export class RegisterUserDto {
  @Field(() => String)
  @IsNotEmpty()
  fullname: string;

  @Field(() => String)
  @IsNotEmpty()
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}

@InputType('LoginUserDTO')
export class LoginUserDTO {
  @Field(() => String)
  @IsNotEmpty()
  emailOrUsername: string;

  @Field(() => String)
  @IsNotEmpty()
  password: string;
}
