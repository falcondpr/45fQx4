import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';

import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepo: Repository<Message>,
  ) {}

  create(dto: any) {
    return this.messageRepo.save(dto);
  }

  findAll(idTeam: ObjectId) {
    return this.messageRepo.findBy({ idTeam });
  }

  findOne(id: ObjectId) {
    return this.messageRepo.findOneByOrFail({ id });
  }

  async update(id: ObjectId, dto: any) {
    const message = await this.messageRepo.findOneBy({ id });
    this.messageRepo.merge(message, dto);
    return this.messageRepo.save(message);
  }

  remove(id: string) {
    return this.messageRepo.delete(id);
  }
}
