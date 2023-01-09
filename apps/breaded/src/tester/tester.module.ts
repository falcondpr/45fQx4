import { Module } from '@nestjs/common'

import { TesterService } from './tester.service'
import { TesterController } from './tester.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
  controllers: [TesterController],
  providers: [TesterService, PrismaService],
})
export class TesterModule {}
