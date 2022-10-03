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

import { CreateTeamDto } from './dto/create-team.dto'
import { TeamService } from './team.service'

@Controller('team')
export class TeamController {
  constructor(private service: TeamService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateTeamDto) {
    const team = await this.service.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Created!',
      success: true,
      data: team,
    })
  }

  @Get()
  async get(@Res() res: Response) {
    const teams = await this.service.get()
    return res.status(HttpStatus.OK).json({
      message: 'Fetching teams',
      success: true,
      data: teams,
    })
  }

  @Get('/:id')
  async getByUser(@Res() res: Response, @Param('id') id: string) {
    const teams = await this.service.getByUser(id)
    return res.status(HttpStatus.OK).json({
      message: 'Teams by user',
      success: true,
      data: teams,
    })
  }
}
