import { ApiProperty } from '@nestjs/swagger';

export class ExamDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  tipo: string;

  @ApiProperty()
  status: string;
}
