import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import { Popover } from 'antd';
import { useFullscreen } from 'ahooks';
import { PageView } from 'evdata';
import './index.less';
import MapView from './_part/MapView';
import BottomView from './_part/BottomView';
import SalesView from './_part/SalesView';
import TopView from './_part/TopView';
interface MarketProps {}

const content = (
  <div>
    <p>双击可全屏</p>
  </div>
);

const Market: FC<MarketProps> = () => {
  const marketRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(
    marketRef,
  );
  /**
   * @description: 双击全屏
   * @param {type}
   * @return {type}
   */
  const handleDoubleClick = () => {
    setFull();
  };
  return (
    <PageView isShowCrumb={false}>
      <div
        className="market"
        // onDoubleClick={() => handleDoubleClick()}
        ref={marketRef}
        id="market"
      >
        <TopView />
        <SalesView />
        <MapView />
        <BottomView />
      </div>
    </PageView>
  );
};

export default Market;
