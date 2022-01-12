import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column({ default: 'ACTIVATE' })
  status: 'ACTIVATE' | 'INACTIVATE';
}
