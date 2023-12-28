import { IsNumber, IsString } from 'class-validator';

export class ComplaintStatusListDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly status: string;
}
