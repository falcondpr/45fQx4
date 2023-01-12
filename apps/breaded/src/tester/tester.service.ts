import { Model } from 'mongoose'
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { CreateTesterDto } from './dto/create-tester.dto'
import { UpdateTesterDto } from './dto/update-tester.dto'
import { Tester } from './entities/tester.entity'

@Injectable()
export class TesterService {
  constructor(
    @InjectModel(Tester.name) private readonly testerModel: Model<Tester>,
  ) {}

  async create(dto: CreateTesterDto) {
    try {
      const tester = await this.testerModel.create(dto)
      return tester
    } catch (error) {
      console.log(error)
      this.handleException(error)
    }
  }

  findAll() {
    return this.testerModel.find()
  }

  async findOne(id: string) {
    try {
      const tester = await this.testerModel.findById(id)
      return tester
    } catch (error) {
      console.log(error)
      this.handleException(error)
    }
  }

  async update(id: string, dto: UpdateTesterDto) {
    const tester = await this.findOne(id)

    try {
      await tester.updateOne(dto)
      return { ...tester.toJSON(), ...dto }
    } catch (error) {
      console.log(error)
      this.handleException(error)
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.testerModel.deleteOne({ _id: id })

    if (deletedCount === 0)
      throw new BadRequestException(`Tester with id ${id} not exists`)

    return `Tester with id ${id} deteled!`
  }

  // eslint-disable-next-line
  private handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Pokemon exists in db ${JSON.stringify(error.keyValue)}`,
      )
    }

    console.log(error)
    throw new InternalServerErrorException(
      `Can't create Pokemon - Check server logs`,
    )
  }
}
