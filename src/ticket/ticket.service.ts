import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTicketDto, UpdateTicketDto } from './dto';
import { Ticket, TicketDocument } from './entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name)
    private readonly ticketModel: Model<TicketDocument>,
  ) {}

  create(dto: CreateTicketDto) {
    return this.ticketModel.create(dto);
  }

  findAll() {
    return this.ticketModel.find();
  }

  findOne(id: string) {
    return this.ticketModel.findById(id);
  }

  update(id: string, dto: UpdateTicketDto) {
    return this.ticketModel.findByIdAndUpdate(
      id,
      {
        ...dto,
        updatedAt: new Date().toISOString(),
      },
      { new: true },
    );
  }

  remove(id: string) {
    return this.ticketModel.findByIdAndDelete(id);
  }
}
