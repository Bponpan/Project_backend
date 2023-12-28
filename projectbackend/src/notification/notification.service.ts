import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationDTO } from './notification.dto';
import { NotificationListDTO } from './notificationlist.dto';


@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async getAllNotifications(): Promise<NotificationListDTO[]> {
    const notifications = await this.notificationRepository.find();
    return this.getAllNotifications();
  }

  async getNotificationById(id: number): Promise<NotificationDTO> {
    const notification = await this.notificationRepository.find();

    if (!notification) {
      throw new NotFoundException(`Notification with id ${id} not found`);
    }

    return ;
  }

  
}