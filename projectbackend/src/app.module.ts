import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Catcontroller} from './cat.controller';
import {CatService} from './cat.service';
import { StudentController } from './student/student.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UsersModule],
  controllers: [AppController,Catcontroller,StudentController],
  providers: [AppService, CatService],
})
export class AppModule{}
