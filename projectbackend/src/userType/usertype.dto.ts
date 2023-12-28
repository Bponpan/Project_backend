import { IsNumber, IsString } from 'class-validator';

export class UserTypeDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly status: string;
}