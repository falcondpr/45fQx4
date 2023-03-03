import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesterModule } from './tester/tester.module';

@Module({
  imports: [TesterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
