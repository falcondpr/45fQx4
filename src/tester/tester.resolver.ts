import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TesterService } from './tester.service';
import { Tester } from './entities/tester.entity';
import { CreateTesterInput } from './dto/create-tester.input';
import { UpdateTesterInput } from './dto/update-tester.input';

@Resolver(() => Tester)
export class TesterResolver {
  constructor(private readonly testerService: TesterService) {}

  @Mutation(() => Tester)
  createTester(@Args('createTesterInput') createTesterInput: CreateTesterInput) {
    return this.testerService.create(createTesterInput);
  }

  @Query(() => [Tester], { name: 'tester' })
  findAll() {
    return this.testerService.findAll();
  }

  @Query(() => Tester, { name: 'tester' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.testerService.findOne(id);
  }

  @Mutation(() => Tester)
  updateTester(@Args('updateTesterInput') updateTesterInput: UpdateTesterInput) {
    return this.testerService.update(updateTesterInput.id, updateTesterInput);
  }

  @Mutation(() => Tester)
  removeTester(@Args('id', { type: () => Int }) id: number) {
    return this.testerService.remove(id);
  }
}
