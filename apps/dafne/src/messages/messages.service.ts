import { Injectable } from '@nestjs/common'

import { CreateMessageDto } from './dto/create-message.dto'
import { Message } from './entities/message.entity'

@Injectable()
export class MessagesService {
  messages: Message[] = []
  clientToUser = {}

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name
    return Object.values(this.clientToUser)
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId]
  }

  create(createMessageDto: CreateMessageDto) {
    const messages = this.messages.concat(createMessageDto)
    return messages
  }

  findAll() {
    return this.messages
  }
}
