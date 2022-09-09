import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MessagesModule } from '../messages/messages.module'
import { PrismaService } from '../../prisma/prisma.service'
import { UsersService } from '../users/users.service'
import { UsersController } from '../users/users.controller'
import { RequestService } from '../request/request.service'
import { RequestController } from '../request/request.controller'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    MessagesModule,
    ConfigModule.forRoot(),
    JwtModule.register({ secret: process.env.JWT_SECRET_ID }),
  ],
  controllers: [AppController, UsersController, RequestController],
  providers: [AppService, PrismaService, UsersService, RequestService],
})
export class AppModule {}
