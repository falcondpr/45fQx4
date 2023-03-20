import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateMessageDto, UpdateMessageDto } from './dto';
import { Message, MessageDocument } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  create(dto: CreateMessageDto) {
    return this.messageModel.create({ ...dto, status: true });
  }

  findAll(idTeam: string) {
    return this.messageModel.find({ idTeam });
  }

  findOne(id: string) {
    return this.messageModel.findById(id);
  }

  update(id: string, dto: UpdateMessageDto) {
    return this.messageModel.findByIdAndUpdate(
      id,
      { ...dto, updatedAt: new Date().toISOString() },
      { new: true },
    );
  }

  remove(id: string) {
    return this.messageModel.findByIdAndDelete(id);
  }
}
