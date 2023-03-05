import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [UserResolver, UserService, PrismaService, JwtService],
})
export class UserModule {}
