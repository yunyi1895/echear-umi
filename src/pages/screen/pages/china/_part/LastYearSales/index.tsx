import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import { Bg1 } from '@/components';
import { Chart, Interval, Tooltip, Axis, Legend } from 'bizcharts';

interface LastYearSalesProps {}
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
const LastYearSales: FC<LastYearSalesProps> = props => {
  const {} = props;
  return (
    <Bg1
      titleCn="2019年新能源车销量（万辆）"
      //   titleCnStyle={{top:'30px',left:'40px'}}
      //   titleEnStyle={{top:'55px',left:'40px'}}
      titleEn="World NEV passenger car sales volume (10k)"
    >
      <Chart
        scale={scale}
        height={'100%'}
        width={'100%'}
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
                return 'l (270) 0:rgba(81, 4, 239, 1)  1:rgba(255, 48, 248, 1)';
              }
              return 'l (270) 0:rgba(4, 103, 239, 1)  1:rgba(40, 201, 254, 1)';
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
    </Bg1>
  );
};
export default LastYearSales;
