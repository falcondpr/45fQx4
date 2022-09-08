import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MessagesModule } from '../messages/messages.module'
import { PrismaService } from '../../prisma/prisma.service'
import { UsersService } from '../users/users.service'
import { UsersController } from '../users/users.controller'
import { RequestService } from '../request/request.service'
import { RequestController } from '../request/request.controller'

@Module({
  imports: [MessagesModule],
  controllers: [AppController, UsersController, RequestController],
  providers: [AppService, PrismaService, UsersService, RequestService],
})
export class AppModule {}
