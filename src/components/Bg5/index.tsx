/*
 * @Author: your name
 * @Date: 2020-11-13 16:09:56
 * @LastEditTime: 2020-11-16 15:15:00
 * @LastEditors: Please set LastEditors
 * @Description: 背景边框3
 * @FilePath: /echear-umi/src/components/Bg3/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import './index.less';
interface Bg3Props {
  title?: string;
}
const Bg3: FC<Bg3Props> = props => {
  const { title, children } = props;
  return (
    <div className="bg5">
      <div className="bg5-title">{title}</div>
      {children}
    </div>
  );
};
export default Bg3;
