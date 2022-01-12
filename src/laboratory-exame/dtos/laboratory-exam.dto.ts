import { ApiProperty } from '@nestjs/swagger';

export class LaboratoryExamDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  laboratory?: number;

  @ApiProperty()
  exam?: number;
}
