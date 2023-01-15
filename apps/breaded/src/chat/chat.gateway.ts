import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets'

import { CreateMessageDto } from '../message/dto/create-message.dto'
import { MessageService } from '../message/message.service'

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('createChat')
  create(@MessageBody() dto: CreateMessageDto) {
    return this.messageService.create(dto)
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.messageService.findAll()
  }
}
