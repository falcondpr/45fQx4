import {
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBusinessDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  banner: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsArray()
  @IsNotEmpty()
  ownerId: string[];

  @IsObject()
  @IsNotEmpty()
  location: { city: string; country: string; state: string };

  @IsObject()
  @IsNotEmpty()
  address: { name: string; latitude?: string; longitude?: string };
}
