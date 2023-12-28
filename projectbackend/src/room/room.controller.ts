import { Controller, Get, Param } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from './room.dto';
import { RoomListDTO } from './roomlist.dto';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async getAllRooms(): Promise<RoomListDTO[]> {
    return this.roomService.getAllRooms();
  }

  @Get(':id')
  async getRoomById(@Param('id') id: number): Promise<RoomDTO> {
    return this.roomService.getRoomById(id);
  }

  // Add methods for creating, updating, and deleting rooms as needed
}