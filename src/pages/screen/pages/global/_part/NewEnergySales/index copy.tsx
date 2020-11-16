/*
 * @Author: your name
 * @Date: 2020-11-11 15:24:10
 * @LastEditTime: 2020-11-16 16:52:46
 * @LastEditors: Please set LastEditors
 * @Description: 全球新能源车销量
 * @FilePath: /echear-umi/src/pages/screen/pages/global/_part/NewEnergySales/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import { Bg1 } from '@/components';
import { Chart, Interval, Tooltip, Axis, Legend } from 'bizcharts';
interface NewEnergySalesProps {}
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
    alias: '(百万辆)', // 别名
  },
};
const NewEnergySales: FC<NewEnergySalesProps> = props => {
  const {} = props;
  return (
    <Bg1>
      <Chart
        scale={scale}
        height={'100%'}
        width={'100%'}
        padding={[110, 50, 50, 50]}
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
          grid={{
            line: {
              type: 'line',
              style: {
                stroke: '#3886FF',
                lineWidth: 1,
              },
            },
          }}
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
            '月均降雨量',
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
                return 'l (270) 0:rgba(4, 103, 239, 1)  1:rgba(40, 201, 254, 1)';
              }
              return 'l (270) 0:rgba(81, 4, 239, 1)  1:rgba(255, 48, 248, 1)';
            },
          ]}
          position="月份*月均降雨量"
        />
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
          offsetY={35}
        />
        <Tooltip visible={false} />
      </Chart>
    </Bg1>
  );
};
export default NewEnergySales;
