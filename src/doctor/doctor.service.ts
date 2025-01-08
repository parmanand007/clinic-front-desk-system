import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  async createDoctor(dto: CreateDoctorDto): Promise<Doctor> {
    const doctor = this.doctorRepository.create(dto);
    return await this.doctorRepository.save(doctor);
  }

  async findAll(): Promise<Doctor[]> {
    return await this.doctorRepository.find();
  }

  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({ where: { id } });
    if (!doctor) throw new NotFoundException('Doctor not found');
    return doctor;
  }

  async update(id: number, dto: UpdateDoctorDto): Promise<Doctor> {
    await this.findOne(id);  // Ensure doctor exists
    await this.doctorRepository.update(id, dto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    const result = await this.doctorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Doctor not found');
    }
  }
}
