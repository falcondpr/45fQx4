import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGO_HOST,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
      autoLoadEntities: true,
    }),
    JwtModule,
    MessageModule,
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
