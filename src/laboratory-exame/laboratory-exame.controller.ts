import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { LaboratoryExamDto } from './dtos/laboratory-exam.dto';
import { LaboratoryExamEntity } from './interfaces/laboratory-exam.entity';
import { LaboratoryExam } from './interfaces/laboratory-exam.interface';
import { LaboratoryExameService } from './laboratory-exame.service';

@Controller('laboratory-exame')
export class LaboratoryExameController {
  constructor(private readonly laboratoryExamService: LaboratoryExameService) {}

  @Get()
  async index(): Promise<LaboratoryExamEntity[]> {
    return await this.laboratoryExamService.findAll();
  }

  @Post()
  @ApiBody({ type: LaboratoryExamDto })
  async create(
    @Body() laboratoryExam: LaboratoryExam,
  ): Promise<LaboratoryExamEntity> {
    return await this.laboratoryExamService.create(laboratoryExam);
  }
}
