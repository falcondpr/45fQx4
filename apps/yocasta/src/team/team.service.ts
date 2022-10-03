import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Team, TeamDocument } from './schema/team.schema'
import { CreateTeamDto } from './dto/create-team.dto'

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async create(dto: CreateTeamDto): Promise<Team> {
    const team = new this.teamModel(dto)
    return await team.save()
  }

  async get(): Promise<Team[]> {
    const team = await this.teamModel.find()
    return team
  }

  async getByUser(id: string) {
    const teamsAll = await this.teamModel.find()
    const teamsFiltered = teamsAll.map((team) => {
      const isContains = team.members.includes(id)
      if (!isContains) return
      if (isContains) return team
    })

    const teams = teamsFiltered.filter((team) => team?.id && team)
    return teams
  }
}
