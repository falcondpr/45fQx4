import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { SaveService } from './save.service';
import { CreateSaveDto, UpdateSaveDto } from './dto';

@Controller('save')
export class SaveController {
  constructor(private readonly saveService: SaveService) {}

  @Post()
  create(@Body() dto: CreateSaveDto) {
    return this.saveService.create(dto);
  }

  @Get('all/:id')
  findAllByUser(@Param('id') id: string) {
    return this.saveService.findAllByUser(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saveService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSaveDto) {
    return this.saveService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saveService.remove(id);
  }
}
