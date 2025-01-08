import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';
import { AppointmentModule } from './appointment/appointment.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [DatabaseModule, AuthModule, DoctorModule, PatientModule, UserModule, AppointmentModule, QueueModule], //  Fixed Import Order
})
export class AppModule {}
