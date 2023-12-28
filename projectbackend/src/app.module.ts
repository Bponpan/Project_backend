import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Complaint, ComplaintStatus, Room, User, UserType, notification } from './complaint/complaint.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComplaintService } from './complaint/complaint.service';
import { NotificationService } from './notification/notification.service';
import { ComplaintStatusService } from './complaintStatus/complaintstatus.service';
import { RoomService } from './room/room.service';
import { RoomController } from './room/room.controller';
import { UserService } from './user/user.service';
import { UserTypeService } from './userType/usertype.service';
import { UserController } from './user/user.controller';
import { ComplaintController } from './complaint/complaint.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type : 'sqlite',
      database : "project.db",
      entities : [Complaint,User,UserType,ComplaintStatus,Room,notification],
      synchronize :true,
    }),
  ],
  controllers : [AppController, ComplaintController,NotificationService,ComplaintStatusService,RoomService,UserService,UserTypeService],
  providers : [AppService, ComplaintService,NotificationService,ComplaintStatusService,RoomController,UserController,UserTypeService]
})
export class AppModule {}
