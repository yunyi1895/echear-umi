/*
 * @Author: cmf
 * @Date: 2020-09-23 13:55:34
 * @LastEditTime: 2020-09-23 14:00:48
 * @LastEditors: Please set LastEditors
 * @Description: 渲染Icon
 * @FilePath: \echear\src\pages\layout\components\LoopMenuItem.tsx
 */
import * as React from 'react';
import  { MenuDataItem } from '@ant-design/pro-layout';
import Icon from '@/components/Icon/Icon';
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
menus.map(({ icon, children, ...item }) => {
  return {
    ...item,
    icon: icon && typeof icon === 'string' ? <Icon type={icon} /> : '',
    children: children && loopMenuItem(children),
  };
});

export default loopMenuItem
