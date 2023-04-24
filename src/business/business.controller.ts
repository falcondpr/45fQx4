import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { BusinessService } from './business.service';
import { CreateBusinessDto, UpdateBusinessDto } from './dto';
import { ObjectId } from 'typeorm';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post('create')
  create(@Body() dto: CreateBusinessDto) {
    return this.businessService.create(dto);
  }

  @Get()
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':param/:value')
  findOneBy(
    @Param('param') param: string,
    @Param('value') value: ObjectId | string,
  ) {
    return this.businessService.findOneBy(param, value);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateBusinessDto) {
    return this.businessService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.businessService.remove(id);
  }
}
