import { IsNumber } from 'class-validator';

export class NotificationListDTO {
  @IsNumber()
  readonly id: number;
}
