/*
 * @Author: cmf
 * @Date: 2020-10-14 09:37:39
 * @LastEditTime: 2020-10-14 10:53:51
 * @LastEditors: Please set LastEditors
 * @Description: 销售额
 * @FilePath: \echear-umi\src\pages\market\_part\SalesView\_part\Sales\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { ECharts } from 'echarts';
import { useInitChart } from '@/hooks/index';
interface SalesProps {}

const Sales: FC<SalesProps> = () => {
  const salesRef = useRef<HTMLDivElement>(null);
  const mychart = useInitChart(salesRef);
  useEffect(() => {
    if (mychart) {
      mychart.setOption({
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
        tooltip: {},
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666',
          },
          left: 25,
          top: 20,
        },
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#999',
            },
          },
          axisTick: {
            // 刻度线
            alignWithLabel: true,
            lineStyle: {
              color: '#999',
            },
          },
          axisLabel: {
            // 标签文字
            color: '#333',
          },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            // 刻度线
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee',
            },
          },
        },
        series: [
          {
            type: 'bar',
            data: [412, 312, 412, 412, 633, 854, 431, 412, 489, 385, 571, 734],
            itemStyle: {
              color: '#3398db',
            },
            barWidth: '40%',
          },
        ],
      });
    }
  }, [mychart]);
  return <div className="sales-chart" ref={salesRef}></div>;
};

export default Sales;
