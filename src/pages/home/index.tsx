/*
 * @Author: cmf
 * @Date: 2020-09-23 20:29:12
 * @LastEditTime: 2020-09-23 21:43:09
 * @LastEditors: Please set LastEditors
 * @Description: 首页
 * @FilePath: \echear\src\pages\home\index.tsx
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Divider } from 'antd';
import {useHistory} from 'umi'
import PageView from '@/components/PageView';
import CustomCard from './_part/CustomCard'
import RowData from './_part/RowData'
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const linkRrouters: LinkRrouter[] = [];

const Home = () => {
  const history = useHistory()
  /**
   * @description: 点击卡片
   * @param {type}
   * @return {type}
   */
  const handleClickCard = (routeUrl:string)=>{
    history.push({pathname:routeUrl})
  }

  return (
    <PageView isShowCrumb={false} linkRrouters={linkRrouters}>
      <Row gutter={32}>
        <Col className="gutter-row" md={12} sm={24} xs={24}>
          <CustomCard handleClick={handleClickCard} {...RowData.cloud} ></CustomCard>
        </Col>
        <Col className="gutter-row" md={12} sm={24} xs={24}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </PageView>
  );
};
export default Home;
