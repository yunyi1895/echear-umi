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
            path: '/screen/car',
            title: 'Car 页面',
            component: '@/pages/screen/pages/car/index',
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
