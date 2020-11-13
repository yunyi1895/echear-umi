/*
 * @Author: cmf
 * @Date: 2020-11-10 15:44:02
 * @LastEditTime: 2020-11-12 12:29:13
 * @LastEditors: Please set LastEditors
 * @Description: 全球车辆
 * @FilePath: /echear-umi/src/pages/screen/pages/car/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import { Row, Col } from 'antd';
import Sales from './_part/Sales'; //全球乘用车销量
import NewEnergySales from './_part/NewEnergySales'; // 全球新能源车销量
import NewEnergyPenetration from './_part/NewEnergyPenetration'; //渗透率
import { Header } from '@/components';
import {} from '@jiaminghi/data-view-react';
import { SalesExposeFunc } from './_part/Sales';
interface CarProps {}
const Car: FC<CarProps> = props => {
  const {} = props;
  const childRef = useRef<SalesExposeFunc>(null);
  const handleClickChild = () => {
    const current = childRef.current;
    if (current) {
      current.add();
    }
  };
  return (
    <div className="global fx-column">
      <Header />
      <div className="global-content fx-1 fx-row">
        <div className="fx-2 fx-column global-left">
          <div
            onClick={() => {
              handleClickChild();
            }}
            className="fx-1"
          >
            {/* 全球乘用车销量 */}
            <Sales cRef={childRef} />
          </div>
          <div className="global-gap-2"></div>
          <div className="fx-1">
            {/* 全球新能源车销量 */}
            <NewEnergySales />
          </div>
        </div>
        <div className="global-gap"></div>
        <div className="fx-3">
          {/* 渗透率 */}
          <NewEnergyPenetration />
        </div>
      </div>
    </div>
  );
};
export default Car;
