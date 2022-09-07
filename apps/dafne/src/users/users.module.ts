import { Module } from '@nestjs/common'

import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  imports: [PrismaService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
