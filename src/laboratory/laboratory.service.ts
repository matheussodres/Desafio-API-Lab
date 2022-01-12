import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LaboratoryEntity } from './interfaces/laboratory.entity';
import { Laboratory } from './interfaces/laboratory.interface';

@Injectable()
export class LaboratoryService {
  constructor(
    @InjectRepository(LaboratoryEntity)
    private laboratoryRepository: Repository<LaboratoryEntity>,
  ) {}

  async findAll(): Promise<LaboratoryEntity[]> {
    return await this.laboratoryRepository.find({
      where: { status: 'ACTIVATE' },
    });
  }

  async find(laboratoryId: number): Promise<Laboratory> {
    const { id, nome, endereco, status } =
      await this.laboratoryRepository.findOne(laboratoryId);

    const response: Laboratory = {
      id,
      nome,
      endereco,
      status,
    };
    return response;
  }
  async create(laboratory: Laboratory): Promise<LaboratoryEntity> {
    return await this.laboratoryRepository.save(laboratory);
  }

  async update(laboratory: Laboratory): Promise<LaboratoryEntity> {
    const lab = await this.find(laboratory.id);

    lab.nome = laboratory.nome ? laboratory.nome : lab.nome;
    lab.endereco = laboratory.endereco ? laboratory.endereco : lab.endereco;
    lab.status = laboratory.status ? laboratory.status : lab.status;
    return await this.laboratoryRepository.save(lab);
  }

  async delete(id: number): Promise<void> {
    await this.laboratoryRepository.delete({ id });
  }

  async activate(id: number): Promise<void> {
    await this.laboratoryRepository.update(id, { status: 'ACTIVATE' });
  }

  async inactivate(id: number): Promise<void> {
    await this.laboratoryRepository.update(id, { status: 'INACTIVATE' });
  }
}
