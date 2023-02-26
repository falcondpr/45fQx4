import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ChatGateway } from './chat.gateway'
import { MessageService } from '../message/message.service'
import { Message, MessageSchema } from '../message/entities/message.entity'
import { Team, TeamSchema } from '../team/entities/team.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [ChatGateway, MessageService],
})
export class ChatModule {}
