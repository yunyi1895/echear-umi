import echarts, { EChartOption, EChartsResponsiveOption } from 'echarts';

import { useState } from 'react';

type Opt = EChartOption | EChartsResponsiveOption;

interface outdataOpt {
  name: string;
  value: number;
}

const outname = [
  '南海诸岛',
  '北京',
  '天津',
  '上海',
  '重庆',
  '河北',
  '河南',
  '云南',
  '辽宁',
  '黑龙江',
  '湖南',
  '安徽',
  '山东',
  '新疆',
  '江苏',
  '浙江',
  '江西',
  '湖北',
  '广西',
  '甘肃',
  '山西',
  '内蒙古',
  '陕西',
  '吉林',
  '福建',
  '贵州',
  '广东',
  '青海',
  '西藏',
  '四川',
  '宁夏',
  '海南',
  '台湾',
  '香港',
  '澳门',
];
const outvalue = [
  0,
  524,
  13,
  140,
  75,
  13,
  83,
  11,
  19,
  15,
  69,
  260,
  39,
  4,
  31,
  104,
  36,
  1052,
  33,
  347,
  9,
  157,
  22,
  4,
  18,
  5,
  6398,
  41,
  0,
  484,
  404,
  22,
  3,
  5,
  225,
];
let outdata: outdataOpt[] = [];

const trasData = () => {
  for (var i = 0; i < outname.length; i++) {
    outdata.push({
      name: outname[i],
      value: outvalue[i],
    });
  }
};
trasData();
let opt: Opt = {
  visualMap: [
    //视觉映射组件 主要作用是数据分级
    //https://echarts.apache.org/zh/option.html#visualMap-piecewise.type
    {
      type: 'piecewise', //  分段型
      left: 10,
      id: '122',
      bottom: 10,
      itemWidth: 27, // 宽度
      itemHeight: 15,
      textStyle: {
        // 文字样式
        color: '#9aa8d4',
        fontSize: 14,
      },
      pieces: [
        // 自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
        {
          min: 500,
          label: '>500',
        },
        {
          max: 500,
          min: 200,
          label: '200-500',
        },
        {
          max: 200,
          min: 0,
          label: '<200',
        },
        {
          value: 0,
          label: '无数据',
        },
      ],
      inRange: {
        // 定义 在选中范围中 的视觉元素
        color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8'],
      },
      outOfRange: {
        //定义 在选中范围外 的视觉元素
        color: ['#999999'],
      },
    },
  ],
  geo: {
    map: 'china',
    show: true,
    roam: true, // 可以拖动
    id: 0, // 这个很重要 在series 里面geoIndex
    zoom: 1, //地图缩放级别
    selectedMode: 'single', //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选
    top: 0,

    layoutCenter: ['50%', '50%'], // 布局位置
    label: {
      // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
      emphasis: {
        // hover
        show: true,
      },
    },
    itemStyle: {
      //地图区域的多边形 图形样式 比如每个省的边界样式
      normal: {
        //  borderColor:'#f60',
        borderColor: 'rgba(0,63,140,0.2)',
        shadowColor: 'rgba(0,63,140,0.2)',
        shadowOffsetY: 20,
        shadowBlur: 30,
      },
      emphasis: {
        areaColor: '#f60',
      },
    },
  },
  series: [
    {
      type: 'map',
      geoIndex: 0, // 对应geo的id
      aspectScale: 0.75, // 这个参数用于 scale 地图的长宽比 默认 0.75
      zoom: 1,
      top: 0,
      label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        normal: {
          show: true,
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        //地图区域的多边形 图形样式 如果 geo 里面设置了 已geo 为准
        normal: {
          areaColor: '#B2CAE0',
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#eeeeee',
        },
      },
      data: outdata, // 数据格式一般[{ name: string,value: number}]
    },
  ],
};

export default opt;
