import * as argon from 'argon2'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { CreateUserDTO, LoginUserDTO } from './dto/create-user.dto'
import { UpdateUserDTO } from './dto/update-user.dto'
import { User, UserDocument } from './schema/user.schema'
import { SECRET_PASS } from '../utils/constans'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signInToken(userId: string, email: string, name: string) {
    const payload = { id: userId, email, name }

    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '72h',
      secret: SECRET_PASS,
    })
    return token
  }

  async create(dto: CreateUserDTO): Promise<string> {
    const hash = await argon.hash(dto.password)

    const foundUser = await this.userModel.findOne({ email: dto.email })

    if (foundUser) throw new ForbiddenException('El email ya existe')

    const user = new this.userModel({
      name: dto.name,
      email: dto.email,
      username: dto.username,
      password: hash,
    })
    await user.save()

    return await this.signInToken(user._id, user.email, user.name)
  }

  async login(dto: LoginUserDTO): Promise<string> {
    const user = await this.userModel.findOne({ email: dto.email })
    if (!user) throw new NotFoundException('El usuario no existe')

    const pwMatches = await argon.verify(user.password, dto.password)
    if (!pwMatches)
      throw new ForbiddenException('Las credenciales no coinciden')

    return await this.signInToken(user._id, user.email, user.name)
  }

  async update(id: string, dto: UpdateUserDTO): Promise<User> {
    const currentUser = dto
    const findUser = await this.userModel.findById(id)
    if (!findUser) throw new NotFoundException('Usuario no encontrado')

    if (dto.password) {
      currentUser.password = await argon.hash(currentUser.password)
    }

    return await this.userModel.findByIdAndUpdate(id, dto, { new: true })
  }

  async delete(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id)
    return user
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async get(id: string): Promise<User> {
    const user = await this.userModel.findById(id)
    return user
  }

  async getByUsername(username: string): Promise<User> {
    const user = await this.userModel.findOne({ username })
    return user
  }
}
