import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tester {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
