import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './database.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],  // Removed explicit entity here
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
