import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessageModule } from '../message/message.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'
import { URL_MONGO } from '../utils/constans'

@Module({
  imports: [MongooseModule.forRoot(URL_MONGO), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
