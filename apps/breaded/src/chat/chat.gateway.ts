import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

import { CreateMessageDto } from '../message/dto/create-message.dto';
import { MessageService } from '../message/message.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() dto: CreateMessageDto) {
    const messages = this.messageService.create(dto);
    this.server.emit('message', messages);
    return messages;
  }

  @SubscribeMessage('findAllChat')
  findAll(@MessageBody() id_team: string) {
    return this.messageService.findAll(id_team);
  }
}
