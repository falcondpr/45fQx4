import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

import { Message, MessageDocument } from './schema/message.schema'
import { CreateMessageDto } from './dto/create-message.dto'

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async create(dto: CreateMessageDto): Promise<Message> {
    const message = new this.messageModel(dto)
    return await message.save()
  }

  async delete(id: string): Promise<Message> {
    const message = await this.messageModel.findByIdAndDelete(id)
    return message
  }

  async getMessages(id_team: string): Promise<Message[]> {
    const messages = await this.messageModel.find({ id_team })
    return messages
  }

  async getMessage(id: string): Promise<Message> {
    const message = await this.messageModel.findById(id)
    return message
  }
}
