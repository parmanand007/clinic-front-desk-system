import { IsDateString, IsNotEmpty } from 'class-validator';
import { Doctor } from '../../doctor/entities/doctor.entity';
import { Patient } from '../../patient/entities/patient.entity';

export class CreateAppointmentDto {
  @IsDateString()
  @IsNotEmpty()
  appointmentDate: Date;

  @IsNotEmpty()
  doctor: Doctor;

  @IsNotEmpty()
  patient: Patient;

  @IsNotEmpty()
  status: string; // status: scheduled, completed, canceled
}
