import { Module } from '@nestjs/common'

import { PrismaService } from '../../prisma/prisma.service'
import { TesterModule } from '../tester/tester.module'

@Module({
  imports: [TesterModule],
  providers: [PrismaService],
})
export class AppModule {}
