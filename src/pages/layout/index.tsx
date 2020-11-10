/*
 * @Author: cmf
 * @Date: 2020-09-23 12:08:59
 * @LastEditTime: 2020-11-06 10:36:56
 * @LastEditors: Please set LastEditors
 * @Description: layout 组件
 * @FilePath: \echear\src\pages\layout\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { IRouteComponentProps, useHistory } from 'umi';
import menuData from './_part/menuData';
import menuItemRender from './_part/MenuItemRender';
import loopMenuItem from './_part/LoopMenuItem';
import 'evdata/dist/index.css';
import './index.less';
interface LayoutProps extends IRouteComponentProps {}

const Layout: FC<LayoutProps> = props => {
  const { children, location } = props;
  const [pathname, setPathname] = useState('/');
  const [jumpPathname] = useState<string[]>(['/asset', '/screen/car']);
  if (jumpPathname.indexOf(location.pathname) > -1) {
    return <>{children}</>;
  } else {
    return (
      <ConfigProvider locale={zhCN}>
        <ProLayout
          className="proLayout"
          navTheme="light"
          collapsedButtonRender={false}
          collapsed={false}
          title="大屏数据可视化"
          location={{
            pathname: pathname,
          }}
          menuItemRender={(item, dom) =>
            menuItemRender({ item, dom, setPathname })
          }
          menuDataRender={menus => loopMenuItem(menus)}
          route={{
            path: '/',
            routes: menuData,
          }}
        >
          <div id="animated" className="animated">
            {children}
          </div>
        </ProLayout>
      </ConfigProvider>
    );
  }
};

export default Layout;
