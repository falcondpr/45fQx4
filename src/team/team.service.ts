import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTeamDto, UpdateTeamDto } from './dto';
import { Team, TeamDocument } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<TeamDocument>,
  ) {}

  create(dto: CreateTeamDto) {
    return this.teamModel.create(dto);
  }

  findAll() {
    return this.teamModel.find();
  }

  findOne(id: string) {
    return this.teamModel.findById(id);
  }

  async existsTeam(idUsers: string) {
    const members = idUsers.split('_');

    const teamsFromDatabase = await this.teamModel.find();
    const teamFiltered = teamsFromDatabase.map((team) => {
      const isContains = team.members.includes(members[0]);
      if (!isContains) return null;

      const isContains2 = team.members.includes(members[1]);
      if (!isContains2) return null;

      return team;
    });

    const team = teamFiltered.filter((team) => team?._id && team);
    if (!team.length) throw new NotFoundException(`El chat no existe`);

    return team[0];
  }

  async getTeamByUser(id: string) {
    try {
      const allTeams = await this.teamModel.find();
      const teamsFiltered = allTeams.map((team) => {
        const isContains = team.members.includes(id);
        if (!isContains) return null;
        return team;
      });

      const teams = teamsFiltered.filter((team) => team?._id && team);
      return teams;
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, dto: UpdateTeamDto) {
    return this.teamModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.teamModel.findByIdAndDelete(id);
  }
}
