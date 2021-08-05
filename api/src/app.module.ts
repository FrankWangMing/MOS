/*
 * @Descripttion:d
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:08:50
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileserverModule } from './fileserver/fileserver.module';

@Module({
  imports: [FileserverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
