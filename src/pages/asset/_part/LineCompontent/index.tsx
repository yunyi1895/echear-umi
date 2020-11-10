import React, { useState, useEffect, FC } from 'react';
import { Chart, Line, Point, Tooltip, Legend, Axis } from 'bizcharts';

interface LineProps {}
// 数据源
const data = [
  {
    month: 'Jan',
    city: 'Tokyo',
    temperature: 7,
  },
  {
    month: 'Jan',
    city: 'London',
    temperature: 3.9,
  },
  {
    month: 'Feb',
    city: 'Tokyo',
    temperature: 6.9,
  },
  {
    month: 'Feb',
    city: 'London',
    temperature: 4.2,
  },
  {
    month: 'Mar',
    city: 'Tokyo',
    temperature: 9.5,
  },
  {
    month: 'Mar',
    city: 'London',
    temperature: 5.7,
  },
  {
    month: 'Apr',
    city: 'Tokyo',
    temperature: 14.5,
  },
  {
    month: 'Apr',
    city: 'London',
    temperature: 8.5,
  },
  {
    month: 'May',
    city: 'Tokyo',
    temperature: 18.4,
  },
  {
    month: 'May',
    city: 'London',
    temperature: 11.9,
  },
  {
    month: 'Jun',
    city: 'Tokyo',
    temperature: 21.5,
  },
  {
    month: 'Jun',
    city: 'London',
    temperature: 15.2,
  },
  {
    month: 'Jul',
    city: 'Tokyo',
    temperature: 25.2,
  },
  {
    month: 'Jul',
    city: 'London',
    temperature: 17,
  },
  {
    month: 'Aug',
    city: 'Tokyo',
    temperature: 26.5,
  },
  {
    month: 'Aug',
    city: 'London',
    temperature: 16.6,
  },
  {
    month: 'Sep',
    city: 'Tokyo',
    temperature: 23.3,
  },
  {
    month: 'Sep',
    city: 'London',
    temperature: 14.2,
  },
  {
    month: 'Oct',
    city: 'Tokyo',
    temperature: 18.3,
  },
  {
    month: 'Oct',
    city: 'London',
    temperature: 10.3,
  },
  {
    month: 'Nov',
    city: 'Tokyo',
    temperature: 13.9,
  },
  {
    month: 'Nov',
    city: 'London',
    temperature: 6.6,
  },
  {
    month: 'Dec',
    city: 'Tokyo',
    temperature: 9.6,
  },
  {
    month: 'Dec',
    city: 'London',
    temperature: 4.8,
  },
];
const axisConfig = {
  label: {
    style: {
      textAlign: 'center',
      fill: '#f60',
    }, // 设置坐标轴文本样式
  },
  line: {
    style: {
      stroke: '#ccc',
      lineDash: [3, 3],
    }, // 设置坐标轴线样式
  },
  grid: {
    line: {
      style: {
        stroke: '#ccc',
        lineDash: [3, 3],
      },
    }, // 设置坐标系栅格样式
  },
};
const scale = {
  temperature: { min: 0 },
  month: {
    alias: '月份', // 别名
  },
};
const LineCompontent: FC<LineProps> = () => {
  return (
    <>
      <Chart
        scale={scale} // 刻度线最大值与刻度线最小值 还可是设置别名
        padding={[30, 20, 50, 40]}
        autoFit
        height={320}
        data={data}
      >
        {/* 图例 */}
        {/* <Legend visible={false} /> */}
        {/* 提示 */}
        <Tooltip visible={false}>
          {(title, items) => {
            console.log(title, items);
            // items 是个数组，即被触发tooltip的数据。
            // 获取items的颜色
            const color = items ? items[0].color : '#5B8FF9';

            return (
              <div style={{ color: color }}>
                {title}自定义tooltip {items && items[0].data.temperature}
              </div>
            );
          }}
        </Tooltip>
        {/* Y轴 */}
        <Axis
          name="temperature"
          grid={{
            //设置坐标轴网格线的样式,网格线与坐标轴线垂直

            line: {
              // 当line为null时则不展示网格线
              type: 'circle', // 网格线类型 line circle polygon
              style: {
                stroke: '#d9d9d9', // 网格线的颜色
                lineWidth: 1, // 网格线的宽度
                lineDash: [4, 4], // 网格线的虚线配置，第一个参数描述虚线的实部占多少像素，第二个参数描述虚线的虚部占多少像素
              },
            }, // 网格线的样式配置，原有属性为 line
          }}
        />
        {/* X轴 */}
        <Axis
          name="month"
          position={'bottom'} // 刻度线位置
          // 刻度线名称
          title={{
            //当前坐标轴标题是否需要显示,及其样式配置
            // 官方错误
            // @ts-ignore：无法被执行的代码的错误
            position: 'end',
            style: {
              fill: '#f60',
              textAlign: 'end',
            },

            // offset:-100
          }}
          label={{
            // 设置坐标轴文本样式
            style: {
              textAlign: 'start',
              fill: '#f60',
            },
          }}
        />
        <Line
          shape="smooth" //将数据值映射到图形的形状上的方法 line:折线,smooth:平滑曲线,dot:点线，dash：虚线
          style={
            {
              //配置几何图形的样式
            }
          }
          size={1} //用于配置线的粗细
          position="month*temperature" //x轴映射的字段*y轴映射的字段
          color="city" //通过数据显示颜色，例：color="dataField"
          // label="temperature" //配置折线的标注 temperature 代表数值  position="x*y" label="y"
          label={[
            'temperature',
            { style: { fill: 'red' } }, // GeometryLabelCfg
          ]}
        />
        {/* <Point position="month*temperature" color="city" /> */}
      </Chart>
    </>
  );
};
export default LineCompontent;
