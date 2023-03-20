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
import { CreateMessageDto, UpdateMessageDto } from './dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post('create')
  create(@Body() dto: CreateMessageDto) {
    return this.messageService.create(dto);
  }

  @Get('idTeam/:idTeam')
  findAll(@Param('idTeam') idTeam: string) {
    return this.messageService.findAll(idTeam);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateMessageDto) {
    return this.messageService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(id);
  }
}
