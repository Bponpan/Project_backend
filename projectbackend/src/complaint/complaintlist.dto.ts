// complaint-list.dto.ts

import { IsNumber, IsString } from 'class-validator';

export class ComplaintListDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly description: string;
}
