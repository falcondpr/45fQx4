import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { TesterService } from './tester.service';
import { CreateTesterDto, UpdateTesterDto } from './dto';

@Controller('tester')
export class TesterController {
  constructor(private readonly testerService: TesterService) {}

  @Post()
  create(@Body() dto: CreateTesterDto) {
    return this.testerService.create(dto);
  }

  @Get()
  findAll() {
    return this.testerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTesterDto) {
    return this.testerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testerService.remove(id);
  }
}
