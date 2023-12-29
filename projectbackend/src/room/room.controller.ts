import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDTO } from './room.dto';
import { Room } from './room.entity';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getIndex(@Req() request : Request) : Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get("id")
  getUserById(@Param('id') id : number) : Promise<Room> {
    return this.roomService.findOne(id);
  }

  @Post(":id")
  postCreate(@Body() createUserDTO : RoomDTO) : Promise<Room> {
    return this.roomService.create(createUserDTO)
  }

  @Delete(":id")
  deleteUserById(@Param('id') id : number) : string {
    this.roomService.deleteById(id);
    return ;
  }
}