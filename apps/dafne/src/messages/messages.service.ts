import { Injectable } from '@nestjs/common'

import { CreateMessageDto } from './dto/create-message.dto'
import { Message } from './entities/message.entity'

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Fernando', text: 'Hey Lee' }]
  clientToUser = {}

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name
    return Object.values(this.clientToUser)
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId]
  }

  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto }
    this.messages.push(message)
  }

  findAll() {
    return this.messages
  }
}
