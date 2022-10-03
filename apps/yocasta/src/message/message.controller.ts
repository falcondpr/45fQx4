import { Response } from 'express'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common'

import { MessageService } from './message.service'
import { CreateMessageDto } from './dto/create-message.dto'

@Controller('message')
export class MessageController {
  constructor(private service: MessageService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateMessageDto) {
    const message = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Message created!',
      success: true,
      data: message,
    })
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const message = await this.service.delete(id)
    return res.status(HttpStatus.OK).json({
      message: 'Message deleted!',
      success: true,
      data: message,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const messages = await this.service.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'All messages',
      success: true,
      data: messages,
    })
  }

  @Get('id_team/:id_team')
  async getMessages(@Res() res: Response, @Param('id_team') id_team: string) {
    const messages = await this.service.getMessages(id_team)
    return res.status(HttpStatus.OK).json({
      message: 'All messages',
      success: true,
      data: messages,
    })
  }

  @Get('message/:id')
  async getMessage(@Res() res: Response, @Param('id') id: string) {
    const message = await this.service.getMessage(id)
    return res.status(HttpStatus.OK).json({
      message: 'This message',
      success: true,
      data: message,
    })
  }
}
