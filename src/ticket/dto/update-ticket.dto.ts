import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  @IsString()
  _id?: string;
}
