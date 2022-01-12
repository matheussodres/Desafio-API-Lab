import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { ExamDto } from './dtos/exam.dto';
import { ExamService } from './exam.service';
import { ExamEntity } from './interfaces/exam.entity';
import { Exam } from './interfaces/exam.interface';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  async index(): Promise<ExamEntity[]> {
    return await this.examService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number): Promise<Exam> {
    return this.examService.find(id);
  }

  @Post()
  @ApiBody({ type: ExamDto })
  async create(@Body() exam: Exam): Promise<ExamEntity> {
    return await this.examService.create(exam);
  }

  @Put(':id')
  @ApiBody({ type: ExamDto })
  update(@Param('id') id: number, @Body() exam: Exam): Promise<ExamEntity> {
    exam.id = id;
    return this.examService.update(exam);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.examService.delete(id);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: number) {
    return this.examService.activate(id);
  }

  @Patch(':id/inactivate')
  inactivate(@Param('id') id: number) {
    return this.examService.inactivate(id);
  }
}
