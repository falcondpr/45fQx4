import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TesterModule } from '../tester/tester.module';
import { UserModule } from '../user/user.module';
import { TeamModule } from '../team/team.module';
import { MessageModule } from '../message/message.module';
import { TicketModule } from '../ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECT),
    TesterModule,
    UserModule,
    TeamModule,
    MessageModule,
    TicketModule,
  ],
})
export class AppModule {}
