/*
 * @Author: cmf
 * @Date: 2020-09-25 14:17:39
 * @LastEditTime: 2020-09-27 14:59:27
 * @LastEditors: Please set LastEditors
 * @Description: 右侧的地图
 * @FilePath: \echear\src\pages\cloud\_part\Regional\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { request } from 'umi';
import echarts, {
  ECharts
} from 'echarts';
import './index.less';
import opt from './opt';
export interface RegionalProps {}

const Regional: FC<RegionalProps> = props => {
  const {} = props;
  const [myChart, setMyChart] = useState<ECharts>();

  useEffect(() => {
    const regional = document.getElementById('regional');
    const chart = echarts.init(regional as HTMLDivElement);

    setMyChart(chart);
    const onResize = () => {
      chart.resize();
    };
    window.addEventListener('resize', onResize);
    return () => {
      // 卸载绑定
      window.removeEventListener('resize', onResize);
    };
  }, []);
  useEffect(() => {

    if ( myChart) {
      myChart.setOption(opt);
    }
  }, [ myChart]);
  return (
    <div id="regional" className="regional">
      2222
    </div>
  );
};

export default Regional;
