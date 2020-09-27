import { MenuDataItem } from '@ant-design/pro-layout';
interface Route extends MenuDataItem {
  routes?: Route[];
}
const menuData: Route[] = [
  {
    path: '/home',
    name: '首页',
    icon:'icon-home'
  },
  {
    path: '/cloud',
    name: '上市公司全景概览',
    icon:'icon-cloud'
  },
  {
    path: '/asset',
    name: '资产',
  },
  {
    path: 'bill',
    name: '账单'
  }
];

export default menuData;
