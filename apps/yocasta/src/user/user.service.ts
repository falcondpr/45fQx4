import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

import { CreateUserDTO } from './dto/create-user.dto'
import { UpdateUserDTO } from './dto/update-user.dto'
import { User, UserDocument } from './schema/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: CreateUserDTO): Promise<User> {
    const user = new this.userModel(dto)
    return await user.save()
  }

  async update(id: string, dto: UpdateUserDTO): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, dto, { new: true })
    return user
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
}
