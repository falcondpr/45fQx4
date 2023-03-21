import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { TeamService } from './team.service';
import { CreateTeamDto, UpdateTeamDto } from './dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.create(dto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Get('/members/:idUsers')
  async existTeam(@Param('idUsers') idUsers: string) {
    return this.teamService.existsTeam(idUsers);
  }

  @Get('id/:id')
  async getTeamsByUser(@Param('id') id: string) {
    return this.teamService.getTeamByUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTeamDto) {
    return this.teamService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(id);
  }
}
