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
import { LaboratoryDto } from './dtos/laboratory.dto';
import { LaboratoryEntity } from './interfaces/laboratory.entity';
import { Laboratory } from './interfaces/laboratory.interface';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  async index(): Promise<LaboratoryEntity[]> {
    return await this.laboratoryService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number): Promise<Laboratory> {
    return this.laboratoryService.find(id);
  }

  @Post()
  @ApiBody({ type: LaboratoryDto })
  async create(@Body() laboratory: Laboratory): Promise<LaboratoryEntity> {
    return await this.laboratoryService.create(laboratory);
  }

  @Put(':id')
  @ApiBody({ type: LaboratoryDto })
  update(
    @Param('id') id: number,
    @Body() laboratory: Laboratory,
  ): Promise<LaboratoryEntity> {
    laboratory.id = id;
    return this.laboratoryService.update(laboratory);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.laboratoryService.delete(id);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: number) {
    return this.laboratoryService.activate(id);
  }

  @Patch(':id/inactivate')
  inactivate(@Param('id') id: number) {
    return this.laboratoryService.inactivate(id);
  }
}
