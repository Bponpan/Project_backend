import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Complaint } from './complaint.entity';
import { ComplaintDTO } from './complaint.dto';
import { ComplaintListDTO } from './complaintlist.dto';


@Injectable()
export class ComplaintService {
  complaintService: any;
  constructor(
    @InjectRepository(Complaint)
    private readonly complaintRepository: Repository<Complaint>,
  ) {}

  async getAllComplaints(): Promise<ComplaintListDTO[]> {
    const complaints = await this.complaintRepository.find();
    return complaints.map(({ id, description }) => ({ id, description }));
  }

  async getComplaintById(id: number): Promise<ComplaintDTO> {
    const complaint = await this.complaintRepository.find();

    if (!complaint) {
      throw new NotFoundException(`Complaint with id ${id} not found`);
    }

    return this.complaintService.getComplaintById(id);
  }

  async createComplaint(createComplaintDTO: ComplaintDTO): Promise<ComplaintDTO> {
    const newComplaint = this.complaintRepository.create(createComplaintDTO);
    await this.complaintRepository.save(newComplaint);
    return this.complaintService.createComplaint(createComplaintDTO);
  }

  async updateComplaint(id: number, updateComplaintDTO: ComplaintDTO): Promise<ComplaintDTO> {
    await this.getComplaintById(id); 

    await this.complaintRepository.update(id, updateComplaintDTO);

    return {
      id,
      ...updateComplaintDTO,
    };
  }

  async deleteComplaint(id: number): Promise<void> {
    await this.getComplaintById(id); 
    await this.complaintRepository.delete(id);
  }
}
