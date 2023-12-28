import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ComplaintStatusService } from './complaintstatus.service';
import { ComplaintStatusDTO } from './complaintstatus.dto';
import { ComplaintStatusListDTO } from './complaintstatuslist.dto';

@Controller('complaint-statuses')
export class ComplaintStatusController {
  constructor(private readonly complaintStatusService: ComplaintStatusService) {}

  @Get()
  async getAllComplaintStatuses(): Promise<ComplaintStatusListDTO[]> {
    return this.complaintStatusService.getAllComplaintStatuses();
  }

  @Get(':id')
  async getComplaintStatusById(@Param('id') id: number): Promise<ComplaintStatusDTO> {
    return this.complaintStatusService.getComplaintStatusById(id);
  }

  @Post()
  async createComplaintStatus(@Body() createComplaintStatusDTO: ComplaintStatusDTO): Promise<ComplaintStatusDTO> {
    return this.complaintStatusService.createComplaintStatus(createComplaintStatusDTO);
  }

  @Put(':id')
  async updateComplaintStatus(
    @Param('id') id: number,
    @Body() updateComplaintStatusDTO: ComplaintStatusDTO,
  ): Promise<ComplaintStatusDTO> {
    return this.complaintStatusService.updateComplaintStatus(id, updateComplaintStatusDTO);
  }

  @Delete(':id')
  async deleteComplaintStatus(@Param('id') id: number): Promise<void> {
    return this.complaintStatusService.deleteComplaintStatus(id);
  }
}
