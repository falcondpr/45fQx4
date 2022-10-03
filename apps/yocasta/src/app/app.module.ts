import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { MessageModule } from '../message/message.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'
import { URL_MONGO } from '../utils/constans'
import { TeamModule } from '../team/team.module'

@Module({
  imports: [MongooseModule.forRoot(URL_MONGO), MessageModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
