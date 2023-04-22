import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { MessageService } from './message.service';
import { ObjectId } from 'typeorm';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('create')
  create(@Body() dto: any) {
    return this.messageService.create(dto);
  }

  @Get('idTeam/:idTeam')
  findAll(@Param('idTeam') idTeam: ObjectId) {
    return this.messageService.findAll(idTeam);
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: any) {
    return this.messageService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
