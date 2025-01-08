import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  contactNumber: string;

  @Column({ nullable: true })
  queueNumber: string;

  @Column({ default: 'waiting' })
  status: string;  // Status: waiting, with doctor, completed
}
