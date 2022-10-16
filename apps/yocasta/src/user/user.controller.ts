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

import { CreateUserDTO, LoginUserDTO } from './dto/create-user.dto'
import { UserService } from './user.service'
import { UpdateUserDTO } from './dto/update-user.dto'

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDTO) {
    const token = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'User created!',
      success: true,
      data: token,
    })
  }

  @Post('/login')
  async login(@Res() res: Response, @Body() dto: LoginUserDTO) {
    const token = await this.service.login(dto)
    return res.status(HttpStatus.OK).json({
      message: 'User created!',
      success: true,
      data: token,
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

  @Get('/username/:username')
  async getByUsername(
    @Res() res: Response,
    @Param('username') username: string,
  ) {
    const user = await this.service.getByUsername(username)
    return res.status(HttpStatus.OK).json({
      message: 'User fetched by username!',
      success: true,
      data: user,
    })
  }

  @Get('/name/:name')
  async getByName(@Res() res: Response, @Param('name') name: string) {
    const users = await this.service.getByName(name)
    return res.status(HttpStatus.OK).json({
      message: 'Users fetched by name',
      success: true,
      data: users,
    })
  }
}
