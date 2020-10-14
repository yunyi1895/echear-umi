/*
 * @Author:cmf
 * @Date: 2020-10-13 13:45:03
 * @LastEditTime: 2020-10-13 14:11:31
 * @LastEditors: Please set LastEditors
 * @Description: 公共卡片
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\_part\baseCard\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, ReactNode } from 'react';
import { Card } from 'antd';
import './index.less';
type RenderFunction = () => ReactNode;
interface BaseCardProps {
  title: string;
  number: string;
  chearElement: ReactNode | RenderFunction; // react 节点或者 方法返回react 节点
  footerElement: ReactNode | RenderFunction;
}

const BaseCard: FC<BaseCardProps> = props => {
  const { title, number, chearElement, footerElement } = props;
  console.log(typeof chearElement === 'function');

  return (
    <Card bordered={false} className="base-card">
      <div className="base-card-title">{title}</div>
      <div className="base-card-number">{number}</div>
      <div className="base-card-chear">
        {typeof chearElement === 'function' ? chearElement() : chearElement}
      </div>
      <div className="base-card-line"></div>
      <div className="base-card-footer">
        {typeof footerElement === 'function' ? footerElement() : footerElement}
      </div>
    </Card>
  );
};

export default BaseCard;
