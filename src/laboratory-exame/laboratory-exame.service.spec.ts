import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoryExameService } from './laboratory-exame.service';

describe('LaboratoryExameService', () => {
  let service: LaboratoryExameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboratoryExameService],
    }).compile();

    service = module.get<LaboratoryExameService>(LaboratoryExameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
