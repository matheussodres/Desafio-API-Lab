import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamEntity } from 'src/exam/interfaces/exam.entity';
import { LaboratoryExamEntity } from 'src/laboratory-exame/interfaces/laboratory-exam.entity';
import { LaboratoryEntity } from 'src/laboratory/interfaces/laboratory.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', //Inserir qual tipo de banco está sendo utilizado, no meu caso foi mongodb do Xampp
      host: 'localhost', // Projeto foi local, sem necessidade de AWS, Azure, ou outro Cloud afins
      username: 'root', // Usuário do bd, no xamp localmente utilizo o Root
      password: '', // Localmente não utlizo senha
      database: 'apilab', // Nome pre-definido no Xampp como apilab
      entities: [LaboratoryEntity, ExamEntity, LaboratoryExamEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
