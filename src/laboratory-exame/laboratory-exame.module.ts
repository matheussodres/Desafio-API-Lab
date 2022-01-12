import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryExamEntity } from './interfaces/laboratory-exam.entity';
import { LaboratoryExameController } from './laboratory-exame.controller';
import { LaboratoryExameService } from './laboratory-exame.service';

@Module({
  imports: [TypeOrmModule.forFeature([LaboratoryExamEntity])],
  controllers: [LaboratoryExameController],
  providers: [LaboratoryExameService],
})
export class LaboratoryExameModule {}
