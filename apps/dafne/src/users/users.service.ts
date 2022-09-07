import { Injectable } from '@nestjs/common'

import { PrismaService } from '../../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: { ...dto } })
  }

  getUser(id: number) {
    return this.prisma.user.findFirst({ where: { id } })
  }

  getAll() {
    return this.prisma.user.findMany()
  }
}
