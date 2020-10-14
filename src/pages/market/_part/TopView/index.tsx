/*
 * @Author: cmf
 * @Date: 2020-10-13 13:26:06
 * @LastEditTime: 2020-10-13 16:17:39
 * @LastEditors: Please set LastEditors
 * @Description: 上方组件
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { Card, Col, Row } from 'antd';
import BaseCard from './_part/BaseCard';
import TotalSales from './_part/TotalSales';
import TotalOrders from './_part/TotalOrders';
import TodayUsers from './_part/TodayUsers';
import TotalUsers from './_part/TotalUsers';
interface TopViewProps {}

const TotalSalesFooterElement = () => {
  return (
    <div>
      <span>昨日销售额 </span>
      <span className="emphasis">￥2211</span>
    </div>
  );
};
const TotalOrdersFooterElement = () => {
  return (
    <div>
      <span>昨日订单量 </span>
      <span className="emphasis">11</span>
    </div>
  );
};
const TodayUsersFooterElement = () => {
  return (
    <div>
      <span>退货率 </span>
      <span className="emphasis">11%</span>
    </div>
  );
};

const TotalUsersFooterElement = () => {
  return (
    <div className="fx-row fx-row-center">
      <span>日同比</span>
      <span className="emphasis">12%</span>
      <span className="increase" />
      <span className="month">月同比</span>
      <span className="emphasis">34%</span>
      <span className="decrease" />
    </div>
  );
};
const TopView: FC<TopViewProps> = () => {
  return (
    <div className="top-view">
      <Row gutter={16}>
        <Col span={6}>
          <BaseCard
            title="累计销售额"
            number="￥23,211"
            chearElement={TotalSales}
            footerElement={TotalSalesFooterElement}
          ></BaseCard>
        </Col>
        <Col span={6}>
          <BaseCard
            title="累计订单量"
            number="2,211"
            chearElement={TotalOrders}
            footerElement={TotalOrdersFooterElement}
          ></BaseCard>
        </Col>
        <Col span={6}>
          <BaseCard
            title="今日交易量"
            number="25"
            chearElement={TodayUsers}
            footerElement={TodayUsersFooterElement}
          ></BaseCard>
        </Col>
        <Col span={6}>
          <BaseCard
            title="累计用户数"
            number="2545"
            chearElement={TotalUsers}
            footerElement={TotalUsersFooterElement}
          ></BaseCard>
        </Col>
      </Row>
    </div>
  );
};

export default TopView;
