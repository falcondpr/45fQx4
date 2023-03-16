import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateServiceDto, UpdateServiceDto } from './dto';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('create')
  create(@Body() dto: CreateServiceDto) {
    return this.serviceService.create({
      ...dto,
      category: dto.category.toUpperCase() ?? '',
    });
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get('category/:category')
  findAllByCategory(@Param('category') category: string) {
    return this.serviceService.findAllByCategory(category);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto) {
    return this.serviceService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(id);
  }
}
