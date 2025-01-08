import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentService.createAppointment(createAppointmentDto);
  }

  @Get()
  async findAll() {
    return this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.appointmentService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.appointmentService.delete(+id);
  }
}
