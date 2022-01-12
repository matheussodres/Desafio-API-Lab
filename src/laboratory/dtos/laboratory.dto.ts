import { ApiProperty } from '@nestjs/swagger';

export class LaboratoryDto {
  @ApiProperty()
  nome: string;

  @ApiProperty()
  endereco: string;

  @ApiProperty()
  status: string;
}
