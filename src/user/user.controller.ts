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
import { RegisterUserDto, LoginUserDTO, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { ObjectId } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() dto: RegisterUserDto): Promise<{ token: string }> {
    return this.userService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginUserDTO): Promise<any> {
    return this.userService.login(dto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':param/:value')
  findOneById(
    @Param('value') value: ObjectId | string,
    @Param('param') param: string,
  ): Promise<User> {
    return this.userService.findOneBy(value, param);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.userService.remove(id);
  }
}
