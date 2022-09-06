import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MessagesModule } from '../messages/messages.module'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
