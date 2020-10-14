/*
 * @Author: cmf
 * @Date: 2020-10-13 13:27:57
 * @LastEditTime: 2020-10-14 10:44:36
 * @LastEditors: Please set LastEditors
 * @Description: 销售数据
 * @FilePath: \echear-umi\src\pages\market\_part\SalesView\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { Card, Radio, Row, Col } from 'antd';
import CardMore from './_part/CardMore';
import Sales from './_part/Sales';
import AccessChart from './_part/AccessChart';
import './index.less';
interface SalesViewProps {}
const tabListNoTitle = [
  {
    key: '1',
    tab: '销售额',
  },
  {
    key: '2',
    tab: '访问量',
  },
];
const contentListNoTitle = {
  '1': <Sales />,
  '2': <AccessChart />,
};

type noTitleKeyType = '1' | '2';

const SalesView: FC<SalesViewProps> = () => {
  const [noTitleKey, setnoTitleKey] = useState<noTitleKeyType>('2');

  const onTabChange = (key: string, type: string) => {
    setnoTitleKey(key as noTitleKeyType);
  };

  return (
    <Card
      className="sales-view"
      style={{ width: '100%' }}
      tabList={tabListNoTitle}
      activeTabKey={noTitleKey}
      tabBarExtraContent={CardMore({})}
      onTabChange={key => {
        onTabChange(key, 'noTitleKey');
      }}
    >
      <Row className="sales" gutter={16}>
        <Col span={19}>{contentListNoTitle[noTitleKey]}</Col>
        <Col span={5}>www</Col>
      </Row>
    </Card>
  );
};

export default SalesView;
