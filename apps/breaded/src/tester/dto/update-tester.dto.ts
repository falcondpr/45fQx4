import { PartialType } from '@nestjs/mapped-types';
import { CreateTesterDto } from './create-tester.dto';

export class UpdateTesterDto extends PartialType(CreateTesterDto) {}
