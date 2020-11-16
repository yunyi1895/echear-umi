/*
 * @Author: your name
 * @Date: 2020-11-11 01:00:09
 * @LastEditTime: 2020-11-16 12:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echear-umi/.umirc.local.ts
 */
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: '/',
  // devtool: 'eval',

  proxy: {
    // '/taobao-web/api/': {
    //   target: 'http://rap2.taobao.org:38080/app/mock/266352',
    //   changeOrigin: true,
    //   pathRewrite: { '^/taobao-web/api': '' },
    // },
    '/evdata-web/api/': {
      target: 'http://172.16.14.37:8082',
      changeOrigin: true,
      pathRewrite: { '^/evdata-web/api': '/evdata-web/api' },
    },
  },
});
