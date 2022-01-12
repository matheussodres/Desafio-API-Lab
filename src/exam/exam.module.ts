import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { ExamEntity } from './interfaces/exam.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamEntity])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
