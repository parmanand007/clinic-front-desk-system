import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { QueueService } from './queue.service';
import { Patient } from '../patient/entities/patient.entity';
import { Queue } from './entities/queue.entity';

@ApiTags('Queue') // Group the endpoints under the "Queue" tag in Swagger
@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @ApiOperation({ summary: 'Add a patient to the queue' })
  @ApiResponse({ status: 201, description: 'Patient added to the queue', type: Queue })
  @ApiResponse({ status: 400, description: 'Invalid patient data' })
  @Post('add')
  async addPatient(@Body() patient: Patient) {
    return this.queueService.addPatientToQueue(patient);
  }

  @ApiOperation({ summary: 'Get all patients in the queue' })
  @ApiResponse({ status: 200, description: 'List of patients in the queue', type: [Queue] })
  @Get()
  async getQueue() {
    return this.queueService.getQueue();
  }

  @ApiOperation({ summary: 'Update the status of a patient in the queue' })
  @ApiResponse({ status: 200, description: 'Queue status updated', type: Queue })
  @ApiResponse({ status: 404, description: 'Queue entry not found' })
  @Put(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ) {
    return this.queueService.updateQueueStatus(id, status);
  }
}
