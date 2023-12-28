import { UserTypeDTO } from './usertype.dto';
import { UserTypeListDTO } from './usertypelist.dto';
import { Controller, Get, Param } from '@nestjs/common';
import { UserTypeService } from './usertype.service';

@Controller('usertypes')
export class UserTypeController {
  constructor(private readonly userTypeService: UserTypeService) {}

  @Get()
  async getAllUserTypes(): Promise<UserTypeListDTO[]> {
    return this.userTypeService.getAllUserTypes();
  }

  @Get(':id')
  async getUserTypeById(@Param('id') id: number): Promise<UserTypeDTO> {
    return this.userTypeService.getUserTypeById(id);
  }

  // Add methods for creating, updating, and deleting user types as needed
}