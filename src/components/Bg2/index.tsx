/*
 * @Author: your name
 * @Date: 2020-11-11 15:46:41
 * @LastEditTime: 2020-11-11 16:21:14
 * @LastEditors: Please set LastEditors
 * @Description: 边框样式1
 * @FilePath: /echear-umi/src/components/Bg2/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import './index.less';
interface Bg2Props {
  title?: string;
}
const Bg2: FC<Bg2Props> = props => {
  const { children, title } = props;
  return (
    <div className="bg2">
      <div className="bg2-title">{title}</div>
      {children}
    </div>
  );
};
export default Bg2;
