import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserType } from './usertype.entity';
import { UserTypeDTO } from './usertype.dto';


@Injectable()
export class UserTypeService {
  constructor(
    @InjectRepository(UserType)
    private readonly userTypeRepository: Repository<UserType>,
  ) {}

  findAll() : Promise<UserType[]> {
    return this.userTypeRepository.find();
  }

  findOne(id : number) : Promise<UserType|null> {
    return this.userTypeRepository.findOneBy({id:id});

  }

  create(userType : UserTypeDTO ) : Promise<UserType|null> {
    return this.userTypeRepository.save(userType);
  }

  async deleteById(id : number) : Promise<void>{
    await this.userTypeRepository.delete({id:id})
  }
  
}