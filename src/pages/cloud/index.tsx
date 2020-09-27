/*
 * @Author: cmf
 * @Date: 2020-09-24 13:16:07
 * @LastEditTime: 2020-09-27 15:04:51
 * @LastEditors: Please set LastEditors
 * @Description: 上市公司
 * @FilePath: \echear\src\pages\cloud\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, useRef, CSSProperties } from 'react';
import PageView from '@/components/PageView/index';
import { Row, Col, Popover } from 'antd';
import {useInterval} from 'ahooks'
import Mock,{Random} from 'mockjs'
import { useFullscreen } from 'ahooks';
import {DataOpt} from './interface'
import './index.less';
import Header from './_part/Header/index';
import Ranking from './_part/Ranking';
import Statistical from './_part/Statistical';
import Regional from './_part/Regional'
import Trend from './_part/Trend'
const content = (
  <div>
    <p>双击可全屏</p>
  </div>
);


const Cloud = () => {
  const cloudRef = useRef<HTMLDivElement>(null);
  // 土地拍卖金额
  const [rankingchartsData,setRankingChartsData] = useState<DataOpt[]>([]);
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(
    cloudRef,
  );
   /**
   * @description: 随机图表数据
   * @param {type}
   * @return {type}
   */
  useInterval(()=>{
    const rankingMock=  Mock.mock({
      'list|10': [{ "name|1": ()=>Random.city(), 'value|200-2000': 50, 'type|0-2': 1 }],
    })
    setRankingChartsData(rankingMock.list);
  },5000,{immediate:true})
  /**
   * @description: 双击全屏
   * @param {type}
   * @return {type}
   */
  const handleDoubleClick = () => {
    console.log('handleDoubleClick');
    setFull();
  };
  return (
    <PageView isShowCrumb={false}>
      <Popover placement="right" content={content}>
        <div
          ref={cloudRef}
          id="cloud"
          onDoubleClick={() => handleDoubleClick()}
          className="cloud"
        >
          <Header />
          <div className=" cloud_container">
            <div className="fx-1 base_info fx-row">
              <div className="fx-column fx-2">
                <h3 className="tit">土地拍卖金额Top10</h3>
                <Ranking chartData={rankingchartsData} />
              </div>
              <div className="fx-column fx-3">
                <h3 className="tit">统计数据</h3>
                <Statistical className="fx-1 fx-column"></Statistical>
              </div>

              <div className="fx-column fx-2">
                <h3 className="tit">上市公司地域分布</h3>
                <Regional ></Regional>
              </div>
            </div>
            <div className="fx-1 footer_info fx-row">
              <div className="fx-3">
              <h3 className="tit">2020年月度股票情况及预测</h3>
                <Trend />
              </div>
              <div className="fx-2"></div>
            </div>
          </div>
        </div>
      </Popover>
    </PageView>
  );
};

export default Cloud;
