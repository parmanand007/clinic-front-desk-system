import { Patient } from 'src/patient/entities/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Queue {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, { eager: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;

  @Column()
  queueNumber: number;

  @Column({ default: 'waiting' })
  status: string; // status: waiting, with doctor, completed
}
