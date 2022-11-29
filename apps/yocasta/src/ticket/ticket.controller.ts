import { Response } from 'express'
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common'
import { CreateTicketDTO } from './dto/create-ticket.dto'
import { TicketService } from './ticket.service'
import { UpdateTicketDTO } from './dto/update-ticket.dto'

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateTicketDTO) {
    const ticket = await this.ticketService.create(dto)
    return res.status(HttpStatus.OK).json({
      message: 'Ticket creado!',
      success: true,
      data: ticket,
    })
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: UpdateTicketDTO,
    @Param('id') id: string,
  ) {
    const ticket = await this.ticketService.update(id, dto)
    return res.status(HttpStatus.OK).json({
      message: 'Ticket actualizado',
      success: true,
      data: ticket,
    })
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const ticket = await this.ticketService.delete(id)
    return res.status(HttpStatus.OK).json({
      message: 'Ticket eliminado',
      success: true,
      data: ticket,
    })
  }

  @Get()
  async getAll(@Res() res: Response) {
    const tickets = await this.ticketService.getAll()
    return res.status(HttpStatus.OK).json({
      message: 'Lista de tickets',
      success: true,
      data: tickets,
    })
  }

  @Get('/unique/:id_buyer/:id_vendor')
  async get(
    @Res() res: Response,
    @Param('id_buyer') id_buyer: string,
    @Param('id_vendor') id_vendor: string,
  ) {
    const ticket = await this.ticketService.get(id_buyer, id_vendor)
    return res.status(HttpStatus.OK).json({
      message: 'Ticket',
      success: true,
      data: ticket,
    })
  }
}
