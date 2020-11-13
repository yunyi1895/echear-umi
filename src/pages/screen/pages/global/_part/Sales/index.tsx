/*
 * @Author: your name
 * @Date: 2020-11-11 15:17:21
 * @LastEditTime: 2020-11-12 09:13:05
 * @LastEditors: Please set LastEditors
 * @Description: 全球乘用车销量
 * @FilePath: /echear-umi/src/pages/screen/pages/global/_part/Sales/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, RefObject, useImperativeHandle } from 'react';
import {} from 'antd';
import { Bg1 } from '@/components';
import { Chart, Interval, Tooltip, Axis } from 'bizcharts';

export interface SalesExposeFunc {
  add: () => void;
}

export interface SalesProps {
  cRef: RefObject<SalesExposeFunc>;
}
const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 45 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];
const Sales: FC<SalesProps> = props => {
  const { cRef } = props;
  //useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值
  useImperativeHandle(cRef, () => {
    return {
      add: () => {
        console.log('调用子组件方法');
      },
    };
  });
  return (
    <Bg1>
      <Chart
        height={'100%'}
        width={'100%'}
        autoFit
        data={data}
        interactions={['active-region']}
        padding={[90, 50, 50, 50]}
      >
        {/* x轴 */}
        <Axis
          name="year"
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
          name="sales"
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
          color="l (270) 0:rgba(4, 103, 239, 1)  1:rgba(40, 201, 254, 1)"
          size={12}
          label={[
            'sales',
            {
              style: {
                fill: '#fff',
              },
            },
          ]}
          position="year*sales"
        />
        <Tooltip visible={false} />
      </Chart>
    </Bg1>
  );
};
export default Sales;
