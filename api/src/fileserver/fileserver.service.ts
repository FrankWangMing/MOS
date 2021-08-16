/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-04 16:08:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-04 16:38:50
 */
import { Injectable } from '@nestjs/common';
import { CreateFileserverDto } from './dto/create-fileserver.dto';
import { UpdateFileserverDto } from './dto/update-fileserver.dto';
import { getAllFile } from '../utils/file';
import path from 'path';
@Injectable()
export class FileserverService {
  create(createFileserverDto: CreateFileserverDto) {
    return 'This action adds a new fileserver';
  }

  findAll() {
    return `This action returns all fileserver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileserver`;
  }

  update(id: number, updateFileserverDto: UpdateFileserverDto) {
    return `This action updates a #${id} fileserver`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileserver`;
  }
  getFile() {
    return '';
  }

  getAllFile() {
    // return getAllFile('/var/www/html');
    return getAllFile('../files');
  }
}
