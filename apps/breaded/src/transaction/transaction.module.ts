import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { Transaction, TransactionSchema } from './entities/transaction.entity'
import { TransactionService } from './transaction.service'
import { TransactionController } from './transaction.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
