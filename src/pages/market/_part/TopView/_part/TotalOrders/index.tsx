/*
 * @Author: cmf
 * @Date: 2020-10-13 13:47:00
 * @LastEditTime: 2020-10-13 16:16:51
 * @LastEditors: Please set LastEditors
 * @Description: 累计销售额
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\_part\TotalOrders\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { ECharts } from 'echarts';
import './index.less';
interface TotalOrdersProps {}

const TotalOrders: FC<TotalOrdersProps> = () => {
  const TotalOrdersRef = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<ECharts>();
  useEffect(() => {
    if (TotalOrdersRef.current) {
      const chart = echarts.init(TotalOrdersRef.current);
      setMyChart(chart);
      const Resize = () => {
        chart.resize();
      };
      window.addEventListener('resize', Resize);
      return () => {
        window.removeEventListener('resize', Resize);
      };
    }
  }, [TotalOrdersRef]);
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
          boundaryGap: false, // x 轴的间距
        },
        yAxis: {
          show: false,
          type: 'value',
        },
        series: [
          {
            type: 'line',
            smooth: true, // 平滑曲线
            data: [112, 312, 412, 412, 633, 854, 431, 412, 489, 385, 571, 734],
            areaStyle: {
              // 面积设置
              color: 'purple', // 紫色
            },
            showSymbol: false, // 不显示点
            lineStyle: {
              // 线的颜色
              color: '#f60',
              width: 0,
            },
          },
        ],
      });
    }
  }, [myChart]);
  return <div ref={TotalOrdersRef} className="total-order"></div>;
};

export default TotalOrders;
