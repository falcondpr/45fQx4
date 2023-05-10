import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ObjectId } from 'typeorm';

import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { LoginUserDTO, RegisterUserDto, UpdateUserDto } from './dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => String)
  register(@Args('register') createUserInput: RegisterUserDto) {
    return this.userService.register(createUserInput);
  }

  @Mutation(() => String)
  login(@Args('login') loginUserInput: LoginUserDTO) {
    return this.userService.login(loginUserInput);
  }

  @Query(() => [User], { name: 'findAllUser' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'findOneUser' })
  findOne(
    @Args('value', { type: () => String }) value: string,
    @Args('param', { type: () => String }) param: string,
  ) {
    return this.userService.findOneBy(value, param);
  }

  @Mutation(() => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserDto,
    @Args('id', { type: () => ObjectId }) id: ObjectId,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => ObjectId }) id: ObjectId) {
    return this.userService.remove(id);
  }
}
