import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { TesterService } from './tester.service'
import { CreateTesterDto } from './dto/create-tester.dto'
import { UpdateTesterDto } from './dto/update-tester.dto'

@Controller('tester')
export class TesterController {
  constructor(private readonly testerService: TesterService) {}

  @Post()
  create(@Body() createTesterDto: CreateTesterDto) {
    return this.testerService.create(createTesterDto)
  }

  @Get()
  findAll() {
    return this.testerService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testerService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesterDto: UpdateTesterDto) {
    return this.testerService.update(+id, updateTesterDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testerService.remove(+id)
  }
}
