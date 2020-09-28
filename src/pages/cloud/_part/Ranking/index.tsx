/*
 * @Author: cmf
 * @Date: 2020-09-24 13:24:58
 * @LastEditTime: 2020-09-28 11:22:47
 * @LastEditors: Please set LastEditors
 * @Description: 市价总值排行Top10
 * @FilePath: \echear\src\pages\cloud\_part\Ranking.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import echarts, { ECharts } from 'echarts';
import './index.less';
import chartsOpt from './chartsOpt';

import { DataOpt, RankingProps } from '../../interface';

/**
 * 1、分析效果图需要用到哪些属性
 * 2、比如这个里面要用到 tooltop、series.label、series.itemStyle
 * 3、先写能看到的
 * 4、在写 鼠标事件
 * 5、数据动效
 */

const Ranking: FC<RankingProps> = props => {
  const { style, chartData } = props;
  const [myChart, setMyChart] = useState<ECharts>();
  /**
   * @description: 添加图表配置
   * @param {type}
   * @return {type}
   */
  useEffect(() => {
    const ranking = document.getElementById('ranking');
    const chart = echarts.init(ranking as HTMLDivElement);
    chart.setOption(chartsOpt);
    setMyChart(chart);
    const onResize = () => {
      // setTimeout(()=>{
      //   chart.resize();
      // },200)
    };
    window.addEventListener('resize', onResize);
    return () => {
      // 卸载绑定
      window.removeEventListener('resize', onResize);
    };
  }, []);

  /**
   * @description: 添加图表数据
   * @param {type}
   * @return {type}
   */
  useEffect(() => {
    if (myChart) {
      let dataX: number[] = [];
      let dataY: string[] = [];
      for (let i = 0; i < chartData.length; i++) {
        dataX.push(chartData[i].value);
        dataY.push(chartData[i].name); // Y轴分类
      }
      myChart.setOption({
        yAxis: {
          data: dataY,
        },
        series: [
          {
            data: dataX,
          },
        ],
      });
    }
  }, [myChart, chartData]);

  return <div style={style} id="ranking" className="ranking"></div>;
};

export default Ranking;
