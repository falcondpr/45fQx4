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

  async existTeam(id_user_transmitter: string, id_user_receiver: string) {
    const teamsFromDatabase = await this.teamModel.find()
    const teamFiltered = teamsFromDatabase.map((team) => {
      const isContains = team.members.includes(id_user_transmitter)
      if (!isContains) return null

      if (isContains) {
        const isContains2 = team.members.includes(id_user_receiver)
        if (!isContains2) return null

        return team
      }
    })

    const team = teamFiltered.filter((team) => team?._id && team)
    return team[0]
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

  async deteleTeam(id: string): Promise<Team> {
    const team = await this.teamModel.findByIdAndDelete(id)
    return team
  }
}
