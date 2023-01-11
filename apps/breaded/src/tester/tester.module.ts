import { Module } from '@nestjs/common'

import { TesterService } from './tester.service'
import { TesterController } from './tester.controller'

@Module({
  controllers: [TesterController],
  providers: [TesterService],
})
export class TesterModule {}
