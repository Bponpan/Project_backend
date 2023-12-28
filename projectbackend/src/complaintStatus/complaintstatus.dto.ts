import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ComplaintStatusListDTO } from './complaintstatuslist.dto';

export class ComplaintStatusDTO {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComplaintStatusListDTO)
  readonly complaints: ComplaintStatusListDTO[];
}
