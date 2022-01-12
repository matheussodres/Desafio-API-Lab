import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LaboratoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column({ default: 'ACTIVATE' })
  status: 'ACTIVATE' | 'INACTIVATE';
}
