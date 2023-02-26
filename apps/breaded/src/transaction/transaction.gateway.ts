import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server } from 'socket.io'

import { UpdateTicketDto } from '../ticket/dto/update-ticket.dto'
import { TicketService } from '../ticket/ticket.service'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TransactionGateway {
  @WebSocketServer()
  server: Server

  constructor(private readonly ticketService: TicketService) {}

  @SubscribeMessage('updateTransaction')
  update(@MessageBody() dto: UpdateTicketDto) {
    const ticket = this.ticketService.update(dto._id, dto)
    this.server.emit('ticket', ticket)
    return ticket
  }

  @SubscribeMessage('findAllTransaction')
  findAll(@MessageBody() id: string) {
    return this.ticketService.findOne(id)
  }
}
