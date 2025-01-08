import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'striker',
  database: 'front-desk-system',
  synchronize: false,
  autoLoadEntities: true,  // Automatically load entities
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Proper path correction
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
};

export default config;
