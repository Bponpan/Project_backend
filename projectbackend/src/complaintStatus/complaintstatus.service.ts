import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComplaintStatus } from './complaintstatus.entity';
import { ComplaintStatusDTO } from './complaintstatus.dto';
import { ComplaintStatusListDTO } from './complaintstatuslist.dto';

@Injectable()
export class ComplaintStatusService {
  complaintStatusService: any;
  constructor(
    @InjectRepository(ComplaintStatus)
    private readonly complaintStatusRepository: Repository<ComplaintStatus>,
  ) {}

  async getAllComplaintStatuses(): Promise<ComplaintStatusListDTO[]> {
    const complaintStatuses = await this.complaintStatusRepository.find();
    return complaintStatuses.map(({ id, status }) => ({ id, status }));
  }

  async getComplaintStatusById(id: number): Promise<ComplaintStatusDTO> {
    const complaintStatus = await this.complaintStatusRepository.find();

    if (!complaintStatus) {
      throw new NotFoundException(`ComplaintStatus with id ${id} not found`);
    }

    return 
  }

  async createComplaintStatus(createComplaintStatusDTO: ComplaintStatusDTO): Promise<ComplaintStatusDTO> {
    const newComplaintStatus = this.complaintStatusRepository.create(createComplaintStatusDTO);
    await this.complaintStatusRepository.save(newComplaintStatus);
    return this.complaintStatusService.createComplaintStatus(createComplaintStatusDTO);
  }

  async updateComplaintStatus(id: number, updateComplaintStatusDTO: ComplaintStatusDTO): Promise<ComplaintStatusDTO> {
    await this.getComplaintStatusById(id); // Check if complaint status exists

    await this.complaintStatusRepository.update(id, updateComplaintStatusDTO);

    return {
      id,
      ...updateComplaintStatusDTO,
    };
  }

  async deleteComplaintStatus(id: number): Promise<void> {
    await this.getComplaintStatusById(id); // Check if complaint status exists
    await this.complaintStatusRepository.delete(id);
  }
}
