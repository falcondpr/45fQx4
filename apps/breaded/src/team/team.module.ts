import { Module } from '@nestjs/common'
import { TeamService } from './team.service'
import { TeamController } from './team.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Team, TeamSchema } from './entities/team.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
