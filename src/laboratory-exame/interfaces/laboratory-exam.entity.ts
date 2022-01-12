import { ExamEntity } from 'src/exam/interfaces/exam.entity';
import { LaboratoryEntity } from 'src/laboratory/interfaces/laboratory.entity';
import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LaboratoryExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ nullable: true })
  // public laboratory?: string;

  // @Column({ nullable: true })
  // public exam?: string;

  // @ManyToMany(() => LaboratoryEntity)
  // @JoinTable()
  // public laboratories: LaboratoryEntity[];

  // @ManyToMany(() => ExamEntity)
  // @JoinTable()
  // public exams: ExamEntity[];
  @ManyToMany(() => LaboratoryEntity, (c) => c.id)
  laboratory?: LaboratoryEntity[];

  @ManyToMany(() => ExamEntity, (c) => c.id)
  exam?: ExamEntity[];
}
