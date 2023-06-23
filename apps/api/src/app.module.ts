import { Module } from '@nestjs/common';
import { PrismaService } from '@sura/prisma';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
