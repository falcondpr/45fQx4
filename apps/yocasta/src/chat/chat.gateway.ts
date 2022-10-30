import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'

import { MessageService } from '../message/message.service'
import { CreateMessageDto } from '../message/dto/create-message.dto'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  @WebSocketServer()
  server: Server

  constructor(private readonly messagesService: MessageService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const messages = this.messagesService.create(createMessageDto)
    this.server.emit('message', messages)
    return messages
  }

  @SubscribeMessage('findAllMessages')
  findAll(@MessageBody() id_team: string) {
    return this.messagesService.getMessages(id_team)
  }
}
