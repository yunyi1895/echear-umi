import React, { useState, useEffect, FC } from 'react';
import {
  G2,
  Chart,
  Tooltip,
  Interval,
  Axis,
  Legend,
  Line,
  registerTheme,
  useTheme,
} from 'bizcharts';
interface HistogramProps {}
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
registerTheme('my-theme', {
  defaultColor: '#6DC8EC',

  geometries: {
    interval: {
      line: {
        default: { style: { fill: '#f60', fillOpacity: 0.95 } },
      },
      rect: {
        default: { style: { fill: '#6DC8EC', fillOpacity: 0.95 } },
        active: { style: { stroke: '#5AD8A6', lineWidth: 1 } },
        inactive: { style: { fillOpacity: 0.3, strokeOpacity: 0.3 } },
        selected: {},
      },
    },
  },
});
const Histogram: FC<HistogramProps> = props => {
  const {} = props;
  const [theme, setTheme] = useTheme('my-theme');

  return (
    <>
      <Chart theme={theme} height={320} padding="auto" data={data} autoFit>
        <Axis
          name="月份"
          label={{
            style: {
              fill: '#f60',
            },
          }}
        />
        <Axis
          name="月均降雨量"
          line={{
            //设置坐标轴线的样式
            style: {
              lineWidth: 1,
              fill: 'red',
              opacity: 1,
            },
          }}
          tickLine={{
            //设置坐标轴的刻度线
            style: {
              lineWidth: 1, // 刻度线宽
              stroke: '#ccc', // 刻度线的颜色
            },
          }}
          grid={null}
        />
        <Legend
          layout="vertical"
          offsetX={100}
          position="top-left"
          // itemName={{ formatter: () => 'custname' }} itemValue={{ formatter: () => 323 }}
          itemName={{
            spacing: 10, // 文本同滑轨的距离
            style: {
              // stroke: 'blue',
              fill: 'red',
            },
            formatter: (text, item, index) => {
              return text === 'Berlin' ? 'Berlin【重点关注】' : text;
            },
          }}
        />
        <Interval
          adjust={[
            {
              type: 'dodge', // stack 堆叠在一起；dodge分开放置
              marginRatio: 0,
            },
          ]}
          color="name"
          position="月份*月均降雨量"
        />
        <Line position="月份*月均降雨量" color="name" adjust="dodge" />
        <Tooltip visible={false} />
      </Chart>
    </>
  );
};
export default Histogram;
