import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'
import { CreateRequestDto } from './dto/create-request.dto'

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRequestDto) {
    return this.prisma.requests.create({
      data: {
        ...dto,
      },
    })
  }

  getAll() {
    return this.prisma.requests.findMany()
  }

  get(id: number) {
    return this.prisma.requests.findFirst({ where: { id: +id } })
  }
}
