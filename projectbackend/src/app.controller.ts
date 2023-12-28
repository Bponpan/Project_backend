import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Catcontroller} from './cat.controller';
import {CatService} from './cat.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus() : string {
    return this.appService.getStatus();
  }

  @Get('count')
  getCount() : string {
    return this.appService.increaseCount().toString();
  }
}
