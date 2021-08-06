import { http } from '@/utils/http';

/*
 * @Descripttion: 
 * @version: 
 * @Author: WangMing
 * @Date: 2021-08-04 14:49:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:50:32
 */
export class FileDomain {
  constructor() {

  }
  async getFile() {
    const { data } = await http.get('fileserver')
    return data
  }
}