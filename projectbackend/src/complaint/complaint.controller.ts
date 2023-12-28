import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintDTO } from './complaint.dto';
import { ComplaintListDTO } from './complaintlist.dto';

@Controller('complaints')
export class ComplaintController {
  constructor(private readonly complaintService: ComplaintService) {}

  @Get()
  async getAllComplaints(): Promise<ComplaintListDTO[]> {
    return this.complaintService.getAllComplaints();
  }

  @Get(':id')
  async getComplaintById(@Param('id') id: number): Promise<ComplaintDTO> {
    return this.complaintService.getComplaintById(id);
  }

  @Post()
  async createComplaint(@Body() createComplaintDTO: ComplaintDTO): Promise<ComplaintDTO> {
    return this.complaintService.createComplaint(createComplaintDTO);
  }

  @Put(':id')
  async updateComplaint(
    @Param('id') id: number,
    @Body() updateComplaintDTO: ComplaintDTO,
  ): Promise<ComplaintDTO> {
    return this.complaintService.updateComplaint(id, updateComplaintDTO);
  }

  @Delete(':id')
  async deleteComplaint(@Param('id') id: number): Promise<void> {
    return this.complaintService.deleteComplaint(id);
  }
}
