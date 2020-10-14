/*
 * @Author: cmf
 * @Date: 2020-10-13 13:47:00
 * @LastEditTime: 2020-10-13 16:06:35
 * @LastEditors: Please set LastEditors
 * @Description: 今日销售数量
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\_part\TodayUsers\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { ECharts } from 'echarts';
import './index.less';
interface TodayUsersProps {}

const TodayUsers: FC<TodayUsersProps> = () => {
  const TodayUsersRef = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<ECharts>();
  useEffect(() => {
    if (TodayUsersRef.current) {
      const chart = echarts.init(TodayUsersRef.current);
      setMyChart(chart);
      const Resize = () => {
        chart.resize();
      };
      window.addEventListener('resize', Resize);
      return () => {
        window.removeEventListener('resize', Resize);
      };
    }
  }, [TodayUsersRef]);
  useEffect(() => {
    if (myChart) {
      myChart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: [],
        },
        yAxis: {
          show: false,
          type: 'value',
        },
        series: [
          {
            type: 'bar',
            data: [412, 312, 412, 412, 633, 854, 431, 412, 489, 385, 571, 734],
            itemStyle: {
              color: '#3398db',
            },
            barWidth: '60%',
          },
        ],
      });
    }
  }, [myChart]);
  return <div ref={TodayUsersRef} className="total-order"></div>;
};

export default TodayUsers;
