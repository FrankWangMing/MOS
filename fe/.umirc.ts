/*
 * @Descripttion: 
 * @version: 
 * @Author: WangMing
 * @Date: 2021-08-04 13:40:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-05 17:56:32
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      'target': 'http://localhost:3000/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },
});
