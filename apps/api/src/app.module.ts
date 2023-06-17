import { Module } from '@nestjs/common';
import { PrismaService } from '@sura/prisma';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
