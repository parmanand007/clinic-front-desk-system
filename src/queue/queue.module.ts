import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { Queue } from './entities/queue.entity';
import { Patient } from '../patient/entities/patient.entity';  // Assuming Patient entity exists

@Module({
  imports: [TypeOrmModule.forFeature([Queue, Patient])],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule {}
