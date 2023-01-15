import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'

import { TeamService } from './team.service'
import { CreateTeamDto } from './dto/create-team.dto'

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto)
  }

  @Get()
  findAll() {
    return this.teamService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.getTeamByUser(id)
  }

  @Get('/members/:id_users')
  async existTeam(@Param('id_users') id_users: string) {
    return this.teamService.existsTeam(id_users)
  }

  @Get(':id')
  async getTeamsByUser(@Param('id') id: string) {
    return this.teamService.getTeamByUser(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(id)
  }
}
