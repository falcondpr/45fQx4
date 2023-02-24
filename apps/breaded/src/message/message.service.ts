import { Model } from 'mongoose';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateMessageDto, UpdateMessageDto } from './dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private readonly messageModel: Model<Message>,
  ) {}

  async create(dto: CreateMessageDto) {
    try {
      const message = await this.messageModel.create({
        ...dto,
        created_at: new Date().toISOString(),
      });

      return message;
    } catch (error) {
      this.handleException(error);
    }
  }

  findAll(id_team: string) {
    return this.messageModel.find({ id_team });
  }

  async findOne(id: string) {
    try {
      const message = await this.messageModel.findById(id);
      return message;
    } catch (error) {
      this.handleException(error);
    }
  }

  async update(id: string, dto: UpdateMessageDto) {
    const message = await this.findOne(id);

    try {
      await message.updateOne(dto);
      return { ...message.toJSON(), ...dto };
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.messageModel.deleteOne({ _id: id });

      if (deletedCount === 0)
        throw new NotFoundException(`Message with id ${id} does not exist`);

      return `Message with id ${id} deleted!`;
    } catch (error) {
      this.handleException(error);
    }
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyvalue)}`,
      );
    }

    console.log(error);

    throw new InternalServerErrorException(
      `Can't create User - Check server logs`,
    );
  }
}
