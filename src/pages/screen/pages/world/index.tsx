/*
 * @Author: your name
 * @Date: 2020-11-13 15:57:17
 * @LastEditTime: 2020-11-13 16:25:49
 * @LastEditors: Please set LastEditors
 * @Description: 第一个页面世界销量
 * @FilePath: /echear-umi/src/pages/screen/pages/world/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import { Header } from '@/components';
import Ball from './_part/Ball';
import Countriy from './_part/Countriy';
import SalesAll from './_part/SalesAll';
import TopList from './_part/TopList';
import SalesChart from './_part/SalesChart';
interface WorldProps {}
const World: FC<WorldProps> = props => {
  const {} = props;
  return (
    <div className="world fx-column">
      <Header title="中国新能源销量数据" />
      <div className="world-content fx-1 fx-row">
        <div className="fx-2 fx-column world-left">
          <div className="fx-1">
            <TopList />
          </div>
        </div>
        <div className="world-gap"></div>
        <div className="fx-4 world-ball">
          <Ball />
        </div>
        <div className="world-gap"></div>
        <div className="fx-2 fx-column world-right">
          <div className="fx-1">
            <Countriy />
          </div>
          <div className="world-gap-2"></div>
          <div className="fx-1">
            <SalesAll />
          </div>
          <div className="world-gap-2"></div>
          <div className="fx-2">
            <SalesChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default World;
