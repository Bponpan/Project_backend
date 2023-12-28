import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { RoomListDTO } from 'src/room/roomlist.dto';

export class UserDTO {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsNumber()
  phonenumber : number;

  @IsString()
  password : string;

  @IsArray()
  @ValidateNested({ each: true })
  rooms: RoomListDTO[]; 
}