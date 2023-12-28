import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './usertype.entity';
import { UserTypeDTO } from './usertype.dto';
import { UserTypeListDTO } from './usertypelist.dto';

@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private readonly userTypeRepository: Repository<UserType>,
  ) {}

  async getAllUserTypes(): Promise<UserTypeListDTO[]> {
    const userTypes = await this.userTypeRepository.find();
    return userTypes.map(({ id, status }) => ({ id, status }));
  }

  async getUserTypeById(id: number): Promise<UserTypeDTO> {
    const userType = await this.userTypeRepository.find();

    if (!userType) {
      throw new NotFoundException(`UserType with id ${id} not found`);
    }

    return ;
  }

  
}