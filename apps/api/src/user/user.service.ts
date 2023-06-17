import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { objectEnumValues } from '@prisma/client/runtime';

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
    return this.prisma.user.findMany();
  }

  findOne(query: { [key: string]: string }) {
    const key = Object.keys(query)[0];
    const value = Object.values(query)[0];

    return this.prisma.user.findFirst({
      where: { [key]: value },
    });
  }

  update(id: string, dto: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...dto,
        updatedAt: new Date(),
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
