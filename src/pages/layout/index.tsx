/*
 * @Author: cmf
 * @Date: 2020-09-23 12:08:59
 * @LastEditTime: 2020-09-23 20:09:21
 * @LastEditors: Please set LastEditors
 * @Description: layout 组件
 * @FilePath: \echear\src\pages\layout\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { IRouteComponentProps, useHistory } from 'umi';
import menuData from './_part/menuData';
import menuItemRender from './_part/MenuItemRender'
import loopMenuItem from './_part/LoopMenuItem'
import '../../assets/style/index.less'
interface LayoutProps extends IRouteComponentProps {}

const Layout: FC<LayoutProps> = props => {
  const { children, location } = props;
  const [pathname, setPathname] = useState('/');
  return (
    <ProLayout
      className="proLayout"
      navTheme="light"
      title="大屏数据可视化"
      location={{
        pathname: pathname,
      }}
      menuItemRender={(item, dom) => menuItemRender({ item, dom, setPathname })}
      menuDataRender={menus => loopMenuItem(menus)}
      route={{
        path: '/',
        routes: menuData,
      }}
    >
      {children}
    </ProLayout>
  );
};

export default Layout;
