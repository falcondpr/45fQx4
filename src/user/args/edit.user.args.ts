import { AddUserArgs } from './add.user.args';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class EditUserArgs extends PartialType(AddUserArgs) {}
