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

  @Get('/members/:id_user_1/:id_user_2')
  async existTeam(
    @Res() res: Response,
    @Param('id_user_1') id_user_1: string,
    @Param('id_user_2') id_user_2: string,
  ) {
    const team = await this.service.existTeam(id_user_1, id_user_2)
    return res.status(HttpStatus.OK).json({
      message: 'Team',
      success: true,
      data: team ?? null,
    })
  }

  @Get('/:id')
  async getTeamsByUser(@Res() res: Response, @Param('id') id: string) {
    const teams = await this.service.getTeamsByUser(id)
    return res.status(HttpStatus.OK).json({
      message: 'Teams by user',
      success: true,
      data: teams,
    })
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const team = await this.service.deteleTeam(id)
    return res.status(HttpStatus.OK).json({
      message: 'Team deleted!',
      success: true,
      data: team,
    })
  }
}
