import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'

import { MessagesService } from './messages.service'
import { CreateMessageDto } from './dto/create-message.dto'
import { Server } from 'socket.io'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  @WebSocketServer()
  server: Server

  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  async create(@MessageBody() createMessageDto: CreateMessageDto) {
    const messages = this.messagesService.create(createMessageDto)
    this.server.emit('message', messages)
    return messages
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll()
  }
}
