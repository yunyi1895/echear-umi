/*
 * @Author: your name
 * @Date: 2020-11-11 15:28:13
 * @LastEditTime: 2020-11-11 15:42:46
 * @LastEditors: Please set LastEditors
 * @Description: Header组件
 * @FilePath: /echear-umi/src/pages/screen/pages/_part/Header/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import './index.less';
interface HeaderProps {
  title?: string;
}
const Header: FC<HeaderProps> = props => {
  const { title } = props;
  return <div className="c-header">{title}</div>;
};
Header.defaultProps = {
  title: '全球乘用车销量',
};
export default Header;
