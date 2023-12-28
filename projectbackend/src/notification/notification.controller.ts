import { Controller, Get, Param } from '@nestjs/common';
import { NotificationDTO } from './notification.dto';
import { NotificationListDTO } from './notificationlist.dto';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getAllNotifications(): Promise<NotificationListDTO[]> {
    return this.notificationService.getAllNotifications();
  }

  @Get(':id')
  async getNotificationById(@Param('id') id: number): Promise<NotificationDTO> {
    return this.notificationService.getNotificationById(id);
  }

  // Add methods for creating, updating, and deleting notifications as needed
}