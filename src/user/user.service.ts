import { Injectable } from '@nestjs/common';
import { AddUserArgs, EditUserArgs } from './args';

@Injectable()
export class UserService {
  create(createUserInput: AddUserArgs) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: EditUserArgs) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
