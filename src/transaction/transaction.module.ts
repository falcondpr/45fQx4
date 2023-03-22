import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TicketService } from '../ticket/ticket.service';
import { Ticket, TicketSchema } from '../ticket/entities/ticket.entity';
import { TransactionGateway } from './transaction.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  providers: [TransactionGateway, TicketService],
})
export class TransactionModule {}
