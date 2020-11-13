/*
 * @Author: cmf
 * @Date: 2020-11-11 15:25:34
 * @LastEditTime: 2020-11-13 14:22:05
 * @LastEditors: Please set LastEditors
 * @Description: 全球新能源车渗透率
 * @FilePath: /echear-umi/src/pages/screen/pages/global/_part/NewEnergyPenetration/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import { Bg2 } from '@/components';
import echarts, { ECharts } from 'echarts';
import opt from './opt';
import './index.less';

interface NewEnergyPenetrationProps {}

const NewEnergyPenetration: FC<NewEnergyPenetrationProps> = props => {
  const {} = props;
  const [myChart, setMyChart] = useState<ECharts>();

  useEffect(() => {
    const regional = document.getElementById('new-energy-penetration');
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
    if (myChart) {
      myChart.setOption(opt);
    }
  }, [myChart]);
  return (
    <Bg2>
      <div className="new-energy-toall">82.55%</div>
      <div id="new-energy-penetration" className="new-energy-penetration"></div>
    </Bg2>
  );
};
export default NewEnergyPenetration;
