/*
 * @Author: your name
 * @Date: 2020-11-12 17:48:21
 * @LastEditTime: 2020-11-13 14:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echear-umi/src/pages/screen/pages/global/_part/NewEnergyPenetration/opt.ts
 */
import echarts, { EChartOption, EChartsResponsiveOption } from 'echarts';

export const colorList = [
  '#C6504F',
  '#4D4CDB',
  '#7D5DCC',
  '#44AE2E',
  '#35C87A',
  '#D39255',
  '#D6C76E',
  '#2268D4',
  '#2498E3',
  '#41CCD3',
];

const opt: EChartOption | EChartsResponsiveOption = {
  color: colorList,

  xAxis: {
    show: false,
  },
  yAxis: {
    type: 'category',
    show: true,
    gridIndex: 0,
    offset: 10, // 偏移
    axisTick: {
      // 刻度
      show: false,
    },
    axisLine: {
      // 轴线
      show: false,
    },
    axisLabel: {
      // 文字
      color: '#949AC7',
      fontSize: 18,
    },
    data: ['数据1', '数据2', '数据3', '数据4', '数据5', '数据6', '数据7'],
  },
  grid: {
    left: '75%',
    height: 350,
    top: '40%',
    right: '4%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'item',
    textStyle: {
      fontSize: 14,
    },
    formatter: '{b} : {c} ({d}%)',
  },
  series: [
    {
      name: 'Sale',
      type: 'bar',
      data: [5, 15, 25, 28, 30, 35, 45],
      // datasetIndex:0,
      xAxisIndex: 0,
      yAxisIndex: 0,
      zlevel: 1,
      itemStyle: {
        // 柱子样式
        normal: {
          color: function(params: any) {
            return colorList[params.dataIndex];
          },
          barBorderRadius: [0, 15, 15, 0],
        },
      },
      barWidth: 15,
    },
    {
      stack: 'a',
      type: 'pie',
      selectedMode: false, // 不能选中
      radius: ['10%', '60%'],
      center: ['40%', '55%'], // 圆心
      //   center: ['55%', '35%'],
      roseType: 'area',
      clockwise: false, // 逆时针
      startAngle: 220, // 起始角度
      //   zlevel: 10,
      silent: true, // 不相应鼠标
      label: {
        // 文字
        // color:'#2ABEFF',
        formatter: '{a|{b}}\n{rate|{d}%}',
        position: 'outside',
        // fontSize: 12,
        align: 'center',
        show: true,
        verticalAlign: 'top',
        rich: {
          // 文字位置
          a: {
            fontSize: 16,
            color: '#fff',
            // padding: [10, -10, -20, -45],
            padding: [10, -60, -60, -60],
          },

          rate: {
            fontSize: 14,
            color: '#2ABEFF',
            padding: [10, -66, -20, -60],
            //  padding: [10, -30, -20, -45],
          },
        },
      },
      labelLine: {
        show: true,
        length: 15,
        length2: 65,
        lineStyle: {
          color: '#2ABEFF',
        },
      },
      data: [
        {
          value: 5,
          name: '数据1',
        },
        {
          value: 15,
          name: '数据2',
        },
        {
          value: 25,
          name: '数据3',
        },
        {
          value: 28,
          name: '数据4',
        },
        {
          value: 30,
          name: '数据5',
        },
        {
          value: 35,
          name: '数据6',
        },
        {
          value: 45,
          name: '数据7',
        },
      ],
    },
  ],
};
export default opt;
