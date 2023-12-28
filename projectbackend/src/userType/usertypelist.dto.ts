import { IsNumber, IsString } from 'class-validator';

export class UserTypeListDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly status: string;
}