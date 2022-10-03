import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Message, MessageSchema } from './schema/message.schema'
import { MessageService } from './message.service'
import { MessageController } from './message.controller'
import { Team, teamSchema } from '../team/schema/team.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: Team.name, schema: teamSchema }]),
  ],
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
