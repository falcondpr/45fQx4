import { PartialType } from '@nestjs/mapped-types';
import { CreateSaveDto } from './create-save.dto';

export class UpdateSaveDto extends PartialType(CreateSaveDto) {}
