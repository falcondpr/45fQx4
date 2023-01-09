import { Injectable } from '@nestjs/common'

import { PrismaService } from '../../prisma/prisma.service'
import { CreateTesterDto } from './dto/create-tester.dto'
import { UpdateTesterDto } from './dto/update-tester.dto'

import { Prisma } from '@prisma/client'

@Injectable()
export class TesterService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTesterDto) {
    return this.prisma.tester.create({
      data: dto,
    })

    // return tester
  }

  findAll() {
    return this.prisma.tester.findMany()
  }

  findOne(id: string) {
    return this.prisma.tester.findUnique({ where: { id } })
  }

  update(id: string, dto: UpdateTesterDto) {
    return this.prisma.tester.update({
      where: { id },
      data: dto,
    })
  }

  remove(id: string) {
    return this.prisma.tester.delete({ where: { id } })
  }
}
