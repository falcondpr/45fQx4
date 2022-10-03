import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Team, teamSchema } from './schema/team.schema'
import { TeamService } from './team.service'
import { TeamController } from './team.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: teamSchema }]),
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
