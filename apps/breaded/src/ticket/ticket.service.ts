import { Model } from 'mongoose'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTicketDto, UpdateTicketDto } from './dto'
import { Ticket } from './entities/ticket.entity'

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketModel: Model<Ticket>,
  ) {}

  async create(dto: CreateTicketDto) {
    try {
      const ticket = await this.ticketModel.create({
        ...dto,
        created_at: new Date().toISOString(),
      })
      return ticket
    } catch (error) {
      this.handleException(error)
    }
  }

  findAll() {
    return this.ticketModel.find()
  }

  findOne(id: string) {
    return this.ticketModel.findById(id)
  }

  async update(id: string, dto: UpdateTicketDto) {
    try {
      const ticketUpdated = await this.ticketModel.findByIdAndUpdate(
        id,
        { ...dto, updated_at: new Date().toISOString() },
        { new: true },
      )
      return ticketUpdated
    } catch (error) {
      this.handleException(error)
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.ticketModel.deleteOne({ _id: id })

      if (deletedCount === 0)
        throw new NotFoundException(`Ticket with id ${id} does not exist`)

      return `Ticket with id ${id} deleted!`
    } catch (error) {
      this.handleException(error)
    }
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Ticket exists in db ${JSON.stringify(error.keyvalue)}`,
      )
    }

    console.log(error)

    throw new InternalServerErrorException(
      `Can't create User - Check server logs`,
    )
  }
}
