import { Response } from 'express'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common'

import { CreateUserDTO } from './dto/create-user.dto'
import { UserService } from './user.service'
import { UpdateUserDTO } from './dto/update-user.dto'

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDTO) {
    const user = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'User created!',
      success: true,
      data: user,
    })
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: UpdateUserDTO,
    @Param('id') id: string,
  ) {
    const user = await this.service.update(id, dto)
    return res.status(HttpStatus.OK).json({
      message: 'User updated!',
      success: true,
      data: user,
    })
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const user = await this.service.delete(id)
    return res.status(HttpStatus.OK).json({
      message: 'User deleted!',
      success: true,
      data: user,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const users = await this.service.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'Fetch all users',
      success: true,
      data: users,
    })
  }

  @Get('/:id')
  async get(@Res() res: Response, @Param('id') id: string) {
    const user = await this.service.get(id)
    return res.status(HttpStatus.OK).json({
      message: 'Fetch user!',
      success: true,
      data: user,
    })
  }
}
