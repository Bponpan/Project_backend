import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class ComplaintDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly userId: number;

  @IsNumber()
  readonly complaintStatusId: number;
}
