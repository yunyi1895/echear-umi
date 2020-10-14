const option = {
  grid: {
    top: 10,
    left: 60,
    right: 60,
    bottom: 50,
  },
  xAxis: {
    data: ['皮包', '饰品', '男鞋', '口红', '玩具', '汽车', '餐桌', '眼镜'],
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 129, 109, 0.1)',
        width: 1, //这里是为了突出显示加上的
      },
    },
    axisLabel: {
      textStyle: {
        color: '#999',
        fontSize: 12,
      },
    },
  },
  yAxis: [
    {
      splitNumber: 2,
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 1, //这里是为了突出显示加上的
        },
      },
      axisLabel: {
        textStyle: {
          color: '#999',
        },
      },
      splitArea: {
        areaStyle: {
          color: 'rgba(255,255,255,.5)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 129, 109, 0.1)',
          width: 0.5,
          type: 'dashed',
        },
      },
    },
  ],
  series: [
    {
      name: 'hill',
      type: 'pictorialBar',
      barCategoryGap: '0%',
      symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
      label: {
        show: true,
        position: 'top',
        distance: 15,
        color: '#DB5E6A',
        fontWeight: 'bolder',
        fontSize: 20,
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              // 颜色组
              {
                offset: 0,
                color: 'rgba(232, 94, 106, .8)', //  0%  处的颜色
              },
              {
                offset: 1,
                color: 'rgba(232, 94, 106, .1)', //  100%  处的颜色
              },
            ],
            global: false, //  缺省为  false
          },
        },
        emphasis: {
          opacity: 1,
        },
      },
      data: [123, 60, 25, 18, 14, 13, 12, 7],
      z: 10,
    },
  ],
};
export default option;
