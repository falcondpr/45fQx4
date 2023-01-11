import { Injectable } from '@nestjs/common'

import { CreateTesterDto } from './dto/create-tester.dto'
import { UpdateTesterDto } from './dto/update-tester.dto'

@Injectable()
export class TesterService {
  async create(dto: CreateTesterDto) {
    return 'create'

    // return tester
  }

  findAll() {
    return 'findall'
  }

  findOne(id: string) {
    return 'findone'
  }

  update(id: string, dto: UpdateTesterDto) {
    return 'update'
  }

  remove(id: string) {
    return 'remove'
  }
}
