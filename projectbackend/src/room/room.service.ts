import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { RoomDTO } from './room.dto';
import { RoomListDTO } from './roomlist.dto';


@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  async getAllRooms(): Promise<RoomListDTO[]> {
    const rooms = await this.roomRepository.find();
    return rooms.map(({ id }) => ({ id }));
  }

  async getRoomById(id: number): Promise<RoomDTO> {
    const room = await this.roomRepository.find();

    if (!room) {
      throw new NotFoundException(`Room with id ${id} not found`);
    }

    return ;
  }

  
}