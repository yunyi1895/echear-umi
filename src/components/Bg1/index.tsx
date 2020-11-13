/*
 * @Author: your name
 * @Date: 2020-11-11 15:46:41
 * @LastEditTime: 2020-11-13 15:07:37
 * @LastEditors: Please set LastEditors
 * @Description: 边框样式1
 * @FilePath: /echear-umi/src/components/Bg1/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, CSSProperties } from 'react';
import {} from 'antd';
import './index.less';
interface Bg1Props {
  titleCn?: string;
  titleEn?: string;
  titleCnStyle?: CSSProperties;
  titleEnStyle?: CSSProperties;
}
const Bg1: FC<Bg1Props> = props => {
  const { children, titleCn, titleEn, titleCnStyle, titleEnStyle } = props;
  return (
    <div className="bg1">
      <div className="bg1-title-cn" style={titleCnStyle}>
        {titleCn}
      </div>
      <div className="bg1-title-en" style={titleEnStyle}>
        {titleEn}
      </div>
      {children}
    </div>
  );
};
Bg1.defaultProps = {
  titleCn: '全球乘用车销售量（百万辆）',
  titleEn: 'Total passenger Vehicle Sales (million)',
};
export default Bg1;
