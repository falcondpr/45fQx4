import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessageService } from '../message/message.service'
import { Message, MessageSchema } from '../message/schema/message.schema'
import { Team, teamSchema } from '../team/schema/team.schema'
import { MessagesGateway } from './chat.gateway'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: Team.name, schema: teamSchema }]),
  ],
  providers: [MessagesGateway, MessageService],
})
export class ChatModule {}
