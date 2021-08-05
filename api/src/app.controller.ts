/*
 * @Descripttion: 
 * @version: 
 * @Author: WangMing
 * @Date: 2021-08-04 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:04:21
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
