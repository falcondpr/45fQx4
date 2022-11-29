import * as dayjs from 'dayjs'
import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Ticket, TicketDocumet } from './schema/ticket.schema'
import { CreateTicketDTO } from './dto/create-ticket.dto'
import { UpdateTicketDTO } from './dto/update-ticket.dto'

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocumet>,
  ) {}

  async create(dto: CreateTicketDTO): Promise<Ticket> {
    const ticket = new this.ticketModel(dto)
    return await ticket.save()
  }

  async update(id: string, dto: UpdateTicketDTO): Promise<Ticket> {
    const data = { ...dto, updated_at: dayjs().format() }
    const ticket = await this.ticketModel.findById(id, data, { new: true })
    return ticket
  }

  async delete(id: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findByIdAndDelete(id)
    return ticket
  }

  async getAll(): Promise<Ticket[]> {
    const tickets = await this.ticketModel.find()
    return tickets
  }

  async get(id_buyer: string, id_vendor: string): Promise<Ticket> {
    const ticket = await this.ticketModel.findOne({ id_buyer, id_vendor })
    return ticket
  }
}
