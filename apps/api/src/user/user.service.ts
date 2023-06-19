import * as argon from 'argon2';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@sura/prisma';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async signInToken(userId: string, email: string, name: string) {
    const payload = { id: userId, email, name };
    const secretKey = process.env.AUTH_SECRET_KEY;
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '72h',
      secret: secretKey,
    });
    return token;
  }

  async create(dto: Prisma.UserCreateInput) {
    const hash = await argon.hash(dto.password);

    const foundUser = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (foundUser) throw new ForbiddenException('El email ya existe');

    const user = await this.prisma.user.create({
      data: {
        ...dto,
        password: hash,
      },
    });

    return this.signInToken(user.id, user.email, user.fullname);
  }

  async login(dto: Prisma.UserCreateInput) {
    const foundUser = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });

    if (!foundUser) throw new ForbiddenException('El usuario no existe');

    const pwMatches = await argon.verify(foundUser.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credenciales incorrectas');

    return this.signInToken(foundUser.id, foundUser.email, foundUser.fullname);
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
