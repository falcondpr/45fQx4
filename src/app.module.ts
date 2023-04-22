import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessageModule } from './message/message.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_HOST,
      entities: ['dist/**/*.entity{.ts,.js}'],
      database: process.env.MONGO_DATABASE,
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    MessageModule,
  ],
})
export class AppModule {}
