import { Injectable } from '@nestjs/common'

import { CreateMessageDto } from './dto/create-message.dto'
import { Message } from './entities/message.entity'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class MessagesService {
  messages: Message[] = []
  clientToUser = {}

  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMessageDto) {
    await this.prisma.messageComment.create({
      data: { ...dto },
    })

    return this.prisma.messageComment.findMany()
  }

  findAll(id_request: number) {
    return this.prisma.messageComment.findMany({
      where: { id_request },
      orderBy: { created_at: 'desc' },
    })
  }
}
