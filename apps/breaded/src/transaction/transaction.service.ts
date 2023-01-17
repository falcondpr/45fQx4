import { Model } from 'mongoose'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTransactionDto } from './dto/create-transaction.dto'
import { UpdateTransactionDto } from './dto/update-transaction.dto'
import { Transaction } from './entities/transaction.entity'

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async create(dto: CreateTransactionDto) {
    try {
      const transaction = await this.transactionModel.create({
        ...dto,
        created_at: new Date().toISOString(),
      })
      return transaction
    } catch (error) {
      this.handleException(error)
    }
  }

  findAll() {
    return this.transactionModel.find()
  }

  findOne(id: string) {
    return this.transactionModel.findById(id)
  }

  async update(id: string, dto: UpdateTransactionDto) {
    const transaction = await this.findOne(id)

    try {
      await transaction.updateOne(dto)
      return { ...transaction.toJSON(), ...dto }
    } catch (error) {
      this.handleException(error)
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.transactionModel.deleteOne({ _id: id })

    if (deletedCount === 0)
      throw new NotFoundException(`Transaction with id ${id} does not exist`)

    return `Transaction with id ${id} deleted!`
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `User exists in db ${JSON.stringify(error.keyvalue)}`,
      )
    }

    console.log(error)

    throw new InternalServerErrorException(
      `Can't create User - Check server logs`,
    )
  }
}
