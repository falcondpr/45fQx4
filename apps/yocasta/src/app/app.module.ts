import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessageModule } from '../message/message.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'
import { TeamModule } from '../team/team.module'
import { UserModule } from '../user/user.module'
import { URL_MONGO } from '../utils/constans'

@Module({
  imports: [
    MongooseModule.forRoot(URL_MONGO),
    MessageModule,
    TeamModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
