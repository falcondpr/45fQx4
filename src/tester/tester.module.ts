import { Module } from '@nestjs/common';
import { TesterService } from './tester.service';
import { TesterResolver } from './tester.resolver';

@Module({
  providers: [TesterResolver, TesterService]
})
export class TesterModule {}
