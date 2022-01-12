import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamEntity } from './interfaces/exam.entity';
import { Exam } from './interfaces/exam.interface';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(ExamEntity)
    private examRepository: Repository<ExamEntity>,
  ) {}

  async findAll(): Promise<ExamEntity[]> {
    return await this.examRepository.find({
      where: { status: 'ACTIVATE' },
    });
  }

  async find(examId: number): Promise<Exam> {
    const { id, nome, tipo, status } = await this.examRepository.findOne(
      examId,
    );

    const response: Exam = {
      id,
      nome,
      tipo,
      status,
    };
    return response;
  }
  async create(exam: Exam): Promise<ExamEntity> {
    return await this.examRepository.save(exam);
  }

  async update(exam: Exam): Promise<ExamEntity> {
    const exa = await this.find(exam.id);

    exa.nome = exam.nome ? exam.nome : exa.nome;
    exa.tipo = exam.tipo ? exam.tipo : exa.tipo;
    exa.status = exam.status ? exam.status : exa.status;
    return await this.examRepository.save(exa);
  }

  async delete(id: number): Promise<void> {
    await this.examRepository.delete({ id });
  }

  async activate(id: number): Promise<void> {
    await this.examRepository.update(id, { status: 'ACTIVATE' });
  }

  async inactivate(id: number): Promise<void> {
    await this.examRepository.update(id, { status: 'INACTIVATE' });
  }
}
