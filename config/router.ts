/*
 * @Author: your name
 * @Date: 2020-11-11 01:00:09
 * @LastEditTime: 2020-11-13 15:59:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echear-umi/config/router.ts
 */
import { IRoute } from 'umi';
const routers: IRoute[] = [
  {
    path: '/',
    exact: false,
    component: '@/pages/layout/index',

    routes: [
      {
        path: '/home',
        exact: true,
        component: '@/pages/home/index',
      },
      /**
       * @description: 上市公司
       * @param {type}
       * @return {type}
       */
      {
        path: '/cloud',
        exact: true,
        component: '@/pages/cloud/index',
      },
      {
        path: '/market',
        exact: true,
        component: '@/pages/market/index',
      },
      {
        path: '/asset',
        exact: true,
        component: '@/pages/asset/index',
      },
      {
        path: '/screen',
        exact: false, // 不能精准匹配
        component: '@/pages/screen/index',
        routes: [
          {
            path: '/screen/world',
            title: '新能源乘用车累计销量',
            component: '@/pages/screen/pages/world/index',
          },
          {
            path: '/screen/global',
            title: 'global 页面',
            component: '@/pages/screen/pages/global/index',
          },
          {
            path: '/screen/china',
            title: '中国新能源销量数据',
            component: '@/pages/screen/pages/china/index',
          },
        ],
      },
      {
        path: '/',
        redirect: '/home',
      },
    ],
  },
];

export default routers;
