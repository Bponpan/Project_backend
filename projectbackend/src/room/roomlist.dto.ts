import { IsNumber } from 'class-validator';

export class RoomListDTO {
  @IsNumber()
  readonly id: number;
}