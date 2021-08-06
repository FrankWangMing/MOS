/*
 * @Descripttion:
 * @version:
 * @Author: WangMing
 * @Date: 2021-08-05 17:36:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:59:46
 */

import axios from 'axios'
export const http = axios.create({
  baseURL: '/api'
})

http.interceptors.response.use((res) => {
  return res.data
})