import { Response } from 'express'
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common'

import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDto) {
    const user = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'User created!',
      success: true,
      data: user,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const users = await this.service.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'All users',
      success: true,
      data: users,
    })
  }

  @Get('/:id')
  async getUser(@Res() res: Response, @Param('id') id: number) {
    const user = await this.service.getUser(+id)
    return res.status(HttpStatus.OK).json({
      message: 'User',
      success: true,
      data: user,
    })
  }
}
