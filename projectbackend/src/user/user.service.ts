import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDTO } from './user.dto';
import { promises } from 'dns';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {

  }

  findAll() : Promise<User[]>{
    return this.userRepository.find();
  }

  findOne(id : number) : Promise<User|null> {
    return this.userRepository.findOneBy({id:id});

  }

  create(user : UserDTO ) : Promise<User|null> {
    return this.userRepository.save(user);
  }

  async deleteById(id : number) : Promise<void>{
    await this.userRepository.delete({id:id})
  }
}