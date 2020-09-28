import echarts, { EChartOption, EChartsResponsiveOption } from 'echarts';

const opt: EChartOption | EChartsResponsiveOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
  },
  legend: {
    textStyle: {
      color: '#9aa8d4',
    },
  },
  grid: {
    bottom: 30,
    left: 60,
  },
  xAxis: [
    {
      type: 'category',

      axisLine: {
        // 轴线
        lineStyle: {
          color: '#9aa8d4',
        },
      },
      axisLabel: {
        // 轴上文字
        color: '#9aa8d4',
      },
      axisTick: {
        show: false,
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
  ],
  yAxis: [
    {
      type: 'value',
      position: 'left',
      id: '0',
      name: '金额',
      axisLine: {
        // 轴线
        lineStyle: {
          color: '#9aa8d4',
        },
      },
      splitLine: {
        // 分割线
        show: false,
      },
      axisLabel: {
        // 轴上文字
        color: '#9aa8d4',
        formatter: (value: number) => {
          return value / 10000 + '万亿';
        },
      },
    },
    {
      type: 'value',
      id: '1',
      position: 'right',
      name: '市盈率',
      axisLine: {
        // 轴线
        lineStyle: {
          color: '#9aa8d4',
        },
      },
      splitLine: {
        // 分割线
        show: false,
      },
      axisLabel: {
        // 轴上文字
        color: '#9aa8d4',
      },
    },
  ],
  series: [
    {
      name: '市价总值',
      type: 'pictorialBar', // 圆柱
      symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
      yAxisIndex: 0,
      itemStyle: {
        color: 'rgba(119, 96, 246, 1)',
      },
      barCategoryGap: '40%', // 圆柱大小
      data: [
        58096.59,
        32855.64,
        44281.8,
        34107.67,
        38396.92,
        31271.66,
        32764.68,
        28885.38,
        21689.22,
        24566.14,
        29652.15,
        30985.4,
      ],
      markPoint: {
        // 标记点
        data: [{ type: 'max', name: '最大值' }],
      },
      markLine: {
        // 标记虚线
        data: [{ type: 'average', name: '平均值' }],
        label: {
          position: 'middle',
          formatter: '月度平均市价总值：{c}亿元',
        },
      },
      zlevel: 1, // 显示等级
    },
    {
      name: '成交总额',
      type: 'pictorialBar',
      symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
      yAxisIndex: 0,
      itemStyle: {
        color: 'rgba(230, 182, 0, 1)',
      },
      data: [
        351041.76,
        334105.65,
        351041.76,
        317966.5,
        320700.9,
        299581.98,
        305437.19,
        290651.27,
        301557.15,
        278622.02,
        300285.49,
        320765.48,
      ],
      barCategoryGap: '40%',
      markPoint: {
        data: [{ type: 'max', name: '最大值' }],
      },

      markLine: {
        label: {
          position: 'middle',
          formatter: '月度平均成交总额：{c}亿元',
        },
        data: [{ type: 'average', name: '平均值' }],
      },
    },
    {
      name: '平均市盈率',
      type: 'line',
      yAxisIndex: 1,
      data: [
        19.25,
        18.29,
        17.77,
        17.31,
        15.16,
        14.06,
        14.29,
        13.58,
        14.07,
        13,
        13.88,
        14.65,
      ],
      itemStyle: {
        color: '#f60',
      },
    },
  ],
};

export default opt;
