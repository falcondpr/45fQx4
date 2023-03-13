import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { UserDocument } from './entities/user.entity';
import { IUserPremium, IUserVerified } from '../interfaces';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  register(@Body() createUserDto: CreateUserDto): Promise<{ token: string }> {
    return this.userService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() createUserDto: LoginUserDto): Promise<{ token: string }> {
    return this.userService.login(createUserDto);
  }

  @Get()
  findAll(): Promise<UserDocument[]> {
    return this.userService.findAll();
  }

  @Get('premium/:param/:value')
  findUserByPremium(
    @Param('param') param: string,
    @Param('value') value: string,
  ): Promise<IUserPremium> {
    return this.userService.findUserByPremium(param, value);
  }

  @Get('verified/:param/:value')
  findUserByVerified(
    @Param('param') param: string,
    @Param('value') value: string,
  ): Promise<IUserVerified> {
    return this.userService.findUserByVerified(param, value);
  }

  @Get(':param/:value')
  findOne(
    @Param('param') param: string,
    @Param('value') value: string,
  ): Promise<UserDocument> {
    return this.userService.findOne(param, value);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<UserDocument> {
    return this.userService.remove(id);
  }
}
