import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Queue } from './entities/queue.entity';
import { Patient } from '../patient/entities/patient.entity';

@Injectable()
export class QueueService {
  constructor(
    @InjectRepository(Queue)
    private readonly queueRepository: Repository<Queue>,
  ) {}

  // Add a walk-in patient to the queue
  async addPatientToQueue(patient: Patient): Promise<Queue> {
    const queueNumber = await this.getNextQueueNumber();

    const queue = this.queueRepository.create({
      patient,
      queueNumber,
      status: 'waiting', // Initial status is 'waiting'
    });

    return await this.queueRepository.save(queue);
  }

  // Get the next available queue number
  private async getNextQueueNumber(): Promise<number> {
    const lastQueue = await this.queueRepository.findOne({
      order: { queueNumber: 'DESC' },
    });
    return lastQueue ? lastQueue.queueNumber + 1 : 1; // Start from 1 if no queues exist
  }

  // Get all patients in the queue
  async getQueue(): Promise<Queue[]> {
    return this.queueRepository.find({ order: { queueNumber: 'ASC' } });
  }

  // Update queue status (e.g., from 'waiting' to 'with doctor')
  async updateQueueStatus(id: number, status: string): Promise<Queue> {
    const queue = await this.findQueue(id);
    queue.status = status;
    return this.queueRepository.save(queue);
  }

  // Find queue entry by ID
  async findQueue(id: number): Promise<Queue> {
    const queue = await this.queueRepository.findOne({ where: { id } });
    if (!queue) throw new NotFoundException('Queue entry not found');
    return queue;
  }
}
