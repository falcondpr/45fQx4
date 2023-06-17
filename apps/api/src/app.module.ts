import { Module } from '@nestjs/common';
import { PrismaService } from '@sura/prisma';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
