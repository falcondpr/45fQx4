import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose/dist';

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    JwtModule,
    UserModule,
    ProductModule,
    ServiceModule,
  ],
})
export class AppModule {}
