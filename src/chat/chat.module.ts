import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Message, MessageSchema } from '../message/entities/message.entity';
import { Team, TeamSchema } from '../team/entities/team.entity';
import { ChatGateway } from './chat.gateway';
import { MessageService } from '../message/message.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [ChatGateway, MessageService],
})
export class ChatModule {}
