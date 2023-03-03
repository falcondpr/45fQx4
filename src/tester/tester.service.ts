import { Injectable } from '@nestjs/common';
import { CreateTesterInput } from './dto/create-tester.input';
import { UpdateTesterInput } from './dto/update-tester.input';

@Injectable()
export class TesterService {
  create(createTesterInput: CreateTesterInput) {
    return 'This action adds a new tester';
  }

  findAll() {
    return `This action returns all tester`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tester`;
  }

  update(id: number, updateTesterInput: UpdateTesterInput) {
    return `This action updates a #${id} tester`;
  }

  remove(id: number) {
    return `This action removes a #${id} tester`;
  }
}
