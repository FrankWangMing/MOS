/*
 * @Descripttion: 
 * @version: 
 * @Author: WangMing
 * @Date: 2021-08-04 16:08:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:39:20
 */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileserverService } from './fileserver.service';
import { CreateFileserverDto } from './dto/create-fileserver.dto';
import { UpdateFileserverDto } from './dto/update-fileserver.dto';

@Controller('fileserver')
export class FileserverController {
  constructor(private readonly fileserverService: FileserverService) { }

  @Post()
  create(@Body() createFileserverDto: CreateFileserverDto) {
    return this.fileserverService.create(createFileserverDto);
  }

  @Get()
  findAll() {
    return {
      data: this.fileserverService.getAllFile()
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileserverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileserverDto: UpdateFileserverDto) {
    return this.fileserverService.update(+id, updateFileserverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileserverService.remove(+id);
  }
}
