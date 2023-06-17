import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '@sura/prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: dto,
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, dto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
