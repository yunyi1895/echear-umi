import React, { useState, useEffect, FC } from 'react';
import { Chart, Interval, Tooltip, Axis, Coordinate, Legend } from 'bizcharts';
interface DonutChartProps {}

// 数据源
const data = [
  { year: '2001', population: 41.8 },
  { year: '2002', population: 38 },
  { year: '2003', population: 33.7 },
  { year: '2004', population: 30.7 },
  { year: '2005', population: 25.8 },
  { year: '2006', population: 31.7 },
  { year: '2007', population: 33 },
  { year: '2008', population: 46 },
  { year: '2009', population: 38.3 },
  { year: '2010', population: 28 },
  { year: '2011', population: 42.5 },
  { year: '2012', population: 30.3 },
];

const DonutChart: FC<DonutChartProps> = props => {
  return (
    <>
      <Chart height={320} data={data} autoFit>
        {/* 坐标系组件 */}
        <Coordinate
          type="polar" //极坐标系，由角度和半径 2 个维度构成。
        />
        {/* 不显示坐标轴 */}
        <Axis visible={false} />
        <Legend visible={false} />
        <Tooltip showTitle={false} />
        {/* 在直角坐标系下可制作柱状图、条形图、区间图 等。
          在极坐标系下可以绘制 饼图，玫瑰图，旭日图，仪表盘 等。 使用组件 */}
        <Interval
          position="year*population" //绘制的图形折点的坐标。"x轴映射的字段*y轴映射的字段",例"x*y"
          adjust="stack" //声明几何标记对象的数据调整方式，可用于绘制层叠图、扰动图、分组图等 一般 stack 就OK了
          element-highlight
          color="year" //通过数据显示颜色，例：color="dataField"
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
          label={[
            //配置标注
            'year',
            {
              offset: -15,
            },
          ]}
        />
      </Chart>
    </>
  );
};
export default DonutChart;
