/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 16:08:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:39:20
 */
import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileserverService } from './fileserver.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { createWriteStream } from 'fs';

@Controller('fileserver')
export class FileserverController {
  constructor(private readonly fileserverService: FileserverService) {}

  @Get()
  findAll() {
    return {
      data: this.fileserverService.getAllFile(),
    };
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    console.log(file);
    const writeImage = createWriteStream(
      // join('../files', `${file.originalname}`),
      join('/var/www/html', `${file.originalname}`),
    );
    writeImage.write(file.buffer);
    return file;
  }
}
