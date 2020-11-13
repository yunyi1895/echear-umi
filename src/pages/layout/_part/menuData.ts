/*
 * @Author: your name
 * @Date: 2020-11-11 18:07:39
 * @LastEditTime: 2020-11-13 14:38:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /echear-umi/src/pages/layout/_part/menuData.ts
 */
import { MenuDataItem } from '@ant-design/pro-layout';
interface Route extends MenuDataItem {
  routes?: Route[];
}
const menuData: Route[] = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-home',
  },
  {
    path: '/cloud',
    name: '上市公司全景概览',
    icon: 'icon-cloud',
  },
  {
    path: '/market',
    name: '上市公司销售信息',
    icon: 'icon-market',
  },
  {
    path: '/asset',
    name: '资产',
  },
  {
    path: 'bill',
    name: '账单',
  },
  {
    path: '/screen/global',
    name: '大屏显示',
    icon: 'icon-cloud',
  },
  {
    path: '/screen/china',
    name: 'china',
    icon: 'icon-cloud',
  },
];

export default menuData;
