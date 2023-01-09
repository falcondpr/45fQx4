import { Module } from '@nestjs/common'

import { TesterModule } from '../tester/tester.module'

@Module({
  imports: [TesterModule],
})
export class AppModule {}
