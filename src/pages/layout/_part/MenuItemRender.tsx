/*
 * @Author: cmf
 * @Date: 2020-09-23 13:53:10
 * @LastEditTime: 2020-09-23 13:55:15
 * @LastEditors: Please set LastEditors
 * @Description: 添加点击事件跳转路由
 * @FilePath: \echear\src\pages\layout\components\MenuItemRender.tsx
 */

import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { MenuDataItem } from '@ant-design/pro-layout';
import { useHistory } from 'umi';
interface MenuItemRenderProps {
  item: MenuDataItem;
  dom: React.ReactNode;
  setPathname: (s: string) => void;
}
const MenuItemRender: FC<MenuItemRenderProps> = props => {
  const { item, dom, setPathname } = props;
  const history = useHistory();
  return (
    <a
      onClick={() => {
        //  history.push('/home')
        setPathname(item.path || '/');
        let path = item.path ? item.path : '/';
        if (
          item.pro_layout_parentKeys &&
          item.pro_layout_parentKeys.length > 0
        ) {
          path = item.pro_layout_parentKeys.join('') + path;
        }
        history.push(path);
      }}
    >
      {dom}
    </a>
  );
};
export default MenuItemRender;
