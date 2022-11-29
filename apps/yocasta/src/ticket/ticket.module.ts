import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Ticket, TicketSchema } from './schema/ticket.schema'
import { TicketService } from './ticket.service'
import { TicketController } from './ticket.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule {}
