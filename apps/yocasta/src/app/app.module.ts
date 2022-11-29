import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessageModule } from '../message/message.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'
import { TeamModule } from '../team/team.module'
import { UserModule } from '../user/user.module'
import { URL_MONGO } from '../utils/constans'
import { ChatModule } from '../chat/chat.module'
import { ProductModule } from '../product/product.module'
import { TicketModule } from '../ticket/ticket.module'

@Module({
  imports: [
    MongooseModule.forRoot(URL_MONGO),
    MessageModule,
    TeamModule,
    UserModule,
    ChatModule,
    ProductModule,
    TicketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
