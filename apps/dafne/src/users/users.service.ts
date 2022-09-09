import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { PrismaService } from '../../prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { LoginUserDto } from './dto/login-user.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  create(dto: CreateUserDto) {
    return this.prisma.user.create({ data: { ...dto } })
  }

  async login(dto: LoginUserDto) {
    const currentUser = dto
    currentUser.email = currentUser.email.toLocaleLowerCase()

    const foundUser = await this.prisma.user.findFirst({
      where: { email: currentUser.email.toLocaleLowerCase() },
    })

    if (!foundUser) {
      return {
        message: 'El usuario no existe',
        success: false,
        data: null,
      }
    }

    const passwordSuccess = await this.prisma.user.findFirst({
      where: {
        password: currentUser.password,
      },
    })

    if (!passwordSuccess) {
      return {
        message: 'Las credenciales no son válidas',
        success: false,
        data: null,
      }
    }

    const payload = {
      _id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
    }

    return this.jwtService.sign(payload)
  }

  getUser(id: number) {
    return this.prisma.user.findFirst({ where: { id } })
  }

  getAll() {
    return this.prisma.user.findMany()
  }
}
