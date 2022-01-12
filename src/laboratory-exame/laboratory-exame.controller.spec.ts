import { Test, TestingModule } from '@nestjs/testing';
import { LaboratoryExameController } from './laboratory-exame.controller';

describe('LaboratoryExameController', () => {
  let controller: LaboratoryExameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboratoryExameController],
    }).compile();

    controller = module.get<LaboratoryExameController>(LaboratoryExameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
