import { Injectable } from '@nestjs/common'

import { CreateMessageDto } from './dto/create-message.dto'
import { Message } from './entities/message.entity'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class MessagesService {
  messages: Message[] = []
  clientToUser = {}

  constructor(private prisma: PrismaService) {}

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name
    return Object.values(this.clientToUser)
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId]
  }

  async create(createMessageDto: CreateMessageDto) {
    await this.prisma.message.create({
      data: { ...createMessageDto },
    })

    return this.prisma.message.findMany()
  }

  findAll() {
    return this.prisma.message.findMany({
      orderBy: { created_at: 'desc' },
    })
  }
}
