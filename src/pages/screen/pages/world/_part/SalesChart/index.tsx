import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import { Bg5 } from '@/components';
import { Chart, Interval, Tooltip, Axis, Legend } from 'bizcharts';
import './index.less';
const data = [
  { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
  { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
  { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
  { name: 'London', 月份: 'May', 月均降雨量: 47 },
  { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
  { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
  { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
  { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
  { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
  { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
  { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
  { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
  { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
  { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
];
const scale = {
  月均降雨量: {
    alias: '(万辆)', // 别名
  },
};

interface SalesChartProps {}
const SalesChart: FC<SalesChartProps> = props => {
  const {} = props;
  return (
    <Bg5 title="2012-2019年新能源乘用车销量(万辆)">
      <div className="sales-chart">
        <Chart
          scale={scale}
          height={472}
          width={460}
          padding={[100, 50, 50, 50]}
          data={data}
          autoFit
        >
          {/* x轴 */}
          <Axis
            name="月份"
            tickLine={null}
            label={{
              style: {
                fill: '#fff',
                fontSize: 12,
              },
            }}
            line={{
              style: {
                fill: '#fff',
              },
            }}
          />
          {/* y轴 */}
          <Axis
            name="月均降雨量"
            tickLine={null}
            title={{
              style: {
                fill: '#fff',
              },
              offset: 19,
              // @ts-ignore
              rotate: Math.PI / 360,
              // @ts-ignore
              position: 'end',
            }}
            grid={{
              line: {
                type: 'line',
                style: {
                  stroke: '#3886FF',
                  lineWidth: 1,
                },
              },
            }}
            line={{
              style: {
                fill: '#fff',
              },
            }}
            label={{
              style: {
                fill: '#fff',
                fontSize: 12,
              },
            }}
          />
          <Interval
            adjust={[
              //分开
              {
                type: 'dodge',
                marginRatio: 0.3,
              },
            ]}
            size={12}
            label={[
              'sales',
              {
                style: {
                  fill: '#fff',
                },
              },
            ]}
            color={[
              'name',
              xVal => {
                if (xVal === 'Berlin') {
                  return 'l (270) 0:rgba(0, 169, 141, 1)  1:rgba(0, 255, 228, 1)';
                }
                return 'l (270) 0:rgba(104, 72, 157, 1)  1:rgba(216, 143, 255, 1)';
              },
            ]}
            position="月份*月均降雨量"
          />
          {/* 标签 */}
          <Legend
            itemName={{
              style: {
                fill: '#fff',
              },
            }}
            position="top-right"
            marker={{
              symbol: 'square',
            }}
            offsetX={-15}
            offsetY={30}
          />
          <Tooltip visible={false} />
        </Chart>
      </div>
    </Bg5>
  );
};
export default SalesChart;
