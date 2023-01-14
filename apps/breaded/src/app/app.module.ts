import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

import { TesterModule } from '../tester/tester.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECT),
    TesterModule,
    UserModule,
  ],
})
export class AppModule {}
