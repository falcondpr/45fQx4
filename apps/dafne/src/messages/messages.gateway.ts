import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'

import { MessagesService } from './messages.service'
import { CreateMessageDto } from './dto/create-message.dto'

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
  findAll(@MessageBody() id_request: number) {
    return this.messagesService.findAll(id_request)
  }
}
