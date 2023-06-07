import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from '../prisma';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
