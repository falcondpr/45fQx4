import { Model } from 'mongoose'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTeamDto } from './dto/create-team.dto'
import { Team } from './entities/team.entity'

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name) private readonly teamModel: Model<Team>,
  ) {}

  async create(dto: CreateTeamDto) {
    try {
      const team = await this.teamModel.create({
        ...dto,
        created_at: new Date().toISOString(),
      })
      return team
    } catch (error) {
      this.handleException(error)
    }
  }

  findAll() {
    return this.teamModel.find()
  }

  async existsTeam(id_users: string) {
    const members = id_users.split('_')

    const teamsFromDatabase = await this.teamModel.find()
    const teamFiltered = teamsFromDatabase.map((team) => {
      const isContains = team.members.includes(members[0])
      if (!isContains) return null

      const isContains2 = team.members.includes(members[1])
      if (!isContains2) return null

      return team
    })

    const team = teamFiltered.filter((team) => team?._id && team)
    if (!team.length) throw new NotFoundException(`Team does not exist`)

    return team[0]
  }

  async getTeamByUser(id: string) {
    try {
      const allTeams = await this.teamModel.find()
      const teamsFiltered = allTeams.map((team) => {
        const isContains = team.members.includes(id)
        if (!isContains) return
        return team
      })

      const teams = teamsFiltered.filter((team) => team?._id && team)
      return teams
    } catch (error) {
      this.handleException(error)
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.teamModel.deleteOne({ _id: id })

      if (deletedCount === 0)
        throw new NotFoundException(`Team with id ${id} does not exists`)

      return `Team with id ${id} deleted!`
    } catch (error) {
      this.handleException(error)
    }
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyvalue)}`,
      )
    }

    console.log(error)

    throw new InternalServerErrorException(
      `Can't create User - Check server logs`,
    )
  }
}
