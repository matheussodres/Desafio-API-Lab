import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoryExamEntity } from './interfaces/laboratory-exam.entity';
import { LaboratoryExam } from './interfaces/laboratory-exam.interface';

@Injectable()
export class LaboratoryExameService {
  constructor(
    @InjectRepository(LaboratoryExamEntity)
    private laboratoryExamRepository: Repository<LaboratoryExamEntity>,
  ) {}

  async findAll(): Promise<LaboratoryExamEntity[]> {
    return await this.laboratoryExamRepository.find();
  }

  async find(laboratoryExamId: number): Promise<LaboratoryExamEntity> {
    const { id, exam, laboratory } =
      await this.laboratoryExamRepository.findOne(laboratoryExamId);

    const response: LaboratoryExam = {
      id,
    };
    return response;
  }

  async create(laboratoryExam: LaboratoryExam): Promise<LaboratoryExamEntity> {
    return await this.laboratoryExamRepository.save(laboratoryExam);
  }

  async update(laboratoryExam: LaboratoryExam): Promise<LaboratoryExamEntity> {
    const lab = await this.find(laboratoryExam.id);

    lab.exam = laboratoryExam.exam ? laboratoryExam.exam : lab.exam;
    lab.laboratory = laboratoryExam.laboratory
      ? laboratoryExam.laboratory
      : lab.laboratory;
    return await this.laboratoryExamRepository.save(lab);
  }

  async delete(id: number): Promise<void> {
    await this.laboratoryExamRepository.delete({ id });
  }
}
