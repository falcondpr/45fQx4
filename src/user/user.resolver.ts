import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './schema/user.entity';
import { EditUserArgs, AddUserArgs } from './args';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String, { name: 'addUser' })
  createUser(@Args('addUserArgs') args: AddUserArgs) {
    return this.userService.create(args);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: EditUserArgs) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
