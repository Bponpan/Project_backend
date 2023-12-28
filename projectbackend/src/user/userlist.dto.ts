import { IsNumber, IsString } from 'class-validator';

export class UserListDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly username: string;
}