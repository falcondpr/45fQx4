import { CreateTesterInput } from './create-tester.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTesterInput extends PartialType(CreateTesterInput) {
  @Field(() => Int)
  id: number;
}
