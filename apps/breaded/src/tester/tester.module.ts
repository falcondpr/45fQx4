import { Module } from '@nestjs/common';

import { TesterService } from './tester.service';
import { TesterController } from './tester.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tester, TesterSchema } from './entities/tester.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tester.name, schema: TesterSchema }]),
  ],
  controllers: [TesterController],
  providers: [TesterService],
})
export class TesterModule {}
