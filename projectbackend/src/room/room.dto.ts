import { IsNumber, IsArray, ValidateNested } from 'class-validator';
import { UserListDTO } from 'src/user/userlist.dto';

export class RoomDTO {
  @IsNumber()
  readonly id: number;

  @IsArray()
  @ValidateNested({ each: true })
  readonly users: UserListDTO[]; // Assuming a DTO for User
}