import { Injectable } from '@nestjs/common'

import { PrismaService } from '../prisma/prisma.service'
import { CreateTesterDto } from './dto/create-tester.dto'
import { UpdateTesterDto } from './dto/update-tester.dto'

@Injectable()
export class TesterService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTesterDto) {
    return 'This action adds a new tester ' + dto
  }

  findAll() {
    return this.prisma.tester.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} tester`
  }

  update(id: number, dto: UpdateTesterDto) {
    return `This action updates a #${id} tester ${dto}`
  }

  remove(id: number) {
    return `This action removes a #${id} tester`
  }
}
