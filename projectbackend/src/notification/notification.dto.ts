import { IsNumber, IsObject } from 'class-validator';
import { ComplaintStatusDTO } from 'src/complaintStatus/complaintstatus.dto';

export class NotificationDTO {
  @IsNumber()
  readonly id: number;

  @IsObject()
  readonly complaintStatus: ComplaintStatusDTO; 
}
