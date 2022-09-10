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

import { RequestService } from './request.service'
import { CreateRequestDto } from './dto/create-request.dto'

@Controller('request')
export class RequestController {
  constructor(private service: RequestService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateRequestDto) {
    const request = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Created!',
      success: true,
      data: request,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const requests = await this.service.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'All requests',
      success: true,
      data: requests,
    })
  }

  @Get('/:id')
  async get(@Res() res: Response, @Param('id') id: number) {
    const request = await this.service.get(id)
    return res.status(HttpStatus.OK).json({
      message: 'Request',
      success: true,
      data: request,
    })
  }
}
