import echarts, { EChartOption, EChartsResponsiveOption } from 'echarts';
const opt: EChartOption | EChartsResponsiveOption = {
  title: {},
  tooltip: {
    // 提示框
    // 鼠标划入时候 展示的面板信息
    show: true,
    trigger: 'axis', // hover 触发方式
    axisPointer: {
      // 轴线显示配置
      type: 'none', // 是否显示轴线
    },
  },
  grid: {
    // 位置
    top: 10,
    bottom: 10,
    left: 70,
  },
  xAxis: {
    // x 轴
    show: false,
    type: 'value', //类型为 数值轴
  },
  yAxis: {
    type: 'category', //类目轴，适用于离散的类目数据
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    inverse: true, //反向
    axisLabel: {
      color: '#9aa8d4',
      fontSize: 12,
    },
    axisTick: {
      //坐标轴刻度相关设置
      show: false,
    },
    axisLine: {
      //坐标轴轴线相关设置
      show: false,
    },
  },
  series: [
    {
      // 系列 和数据展示有关的设置
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      barCategoryGap: '60%', // 类目距离 同一系列的柱间距离
      label: {
        //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
        show: true,
        position: 'right',
        color: '#188df0',
        fontSize: 12,
        emphasis: {
          //鼠标hover的时候 高亮的图形样式和标签样式
          color: '#e6b600',
        },
      },
      itemStyle: {
        // 柱的 图形样式。 列如 颜色 大小
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            {
              offset: 0,
              color: '#b0c2f9',
            },
            {
              offset: 0.5,
              color: '#188df0',
            },
            {
              offset: 1,
              color: '#185bff',
            },
          ]),
        },
        emphasis: {
          // 鼠标hover 激活状态
          color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            {
              offset: 0,
              color: '#b0c2f9',
            },
            {
              offset: 0.7,
              color: '#e6b600',
            },
            {
              offset: 1,
              color: '#ceac09',
            },
          ]),
        },
      },
    },
  ],
};

export default opt;
