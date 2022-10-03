import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'

import { Message, MessageDocument } from './schema/message.schema'
import { CreateMessageDto } from './dto/create-message.dto'
import { Team, TeamDocument } from '../team/schema/team.schema'

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(Team.name) private teamModel: Model<TeamDocument>,
  ) {}

  async create(dto: CreateMessageDto): Promise<Message> {
    const teams = await this.teamModel.find()
    const teamsFiltered = teams?.map((team) => {
      const isContainsReceiver = team.members.includes(dto?.id_user_receiver)

      if (isContainsReceiver) {
        const isContainsTransmitter = team.members.includes(
          dto?.id_user_transmitter,
        )
        if (isContainsTransmitter) {
          return team
        }
      }
    })

    const messagesFiltered = teamsFiltered?.filter((team) => team?.id && team)

    if (messagesFiltered.length === 1) {
      const message = new this.messageModel(dto)
      return await message.save()
    } else {
      const team = new this.teamModel({
        members: [dto.id_user_receiver, dto.id_user_transmitter],
      })
      await team.save()

      const message = new this.messageModel({
        id_team: team._id,
        id_user_receiver: dto.id_user_receiver,
        id_user_transmitter: dto.id_user_transmitter,
        content: dto.content,
      })
      return await message.save()
    }
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
