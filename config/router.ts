/*
 * @Author: your name
 * @Date: 2020-11-11 01:00:09
 * @LastEditTime: 2020-11-11 15:13:54
 * @LastEditors: your name
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
            path: '/screen/global',
            title: 'global 页面',
            component: '@/pages/screen/pages/global/index',
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
