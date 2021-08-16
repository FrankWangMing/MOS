/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 16:08:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:10:43
 */
import { Module } from '@nestjs/common';
import { FileserverService } from './fileserver.service';
import { FileserverController } from './fileserver.controller';

@Module({
  controllers: [FileserverController],
  providers: [FileserverService],
})
export class FileserverModule {}
