/*
 * @Author: your name
 * @Date: 2020-11-16 15:38:52
 * @LastEditTime: 2020-11-16 16:00:54
 * @LastEditors: Please set LastEditors
 * @Description: echart 通用组件
 * @FilePath: /echear-umi/src/components/EchartPage/index.tsx
 */
import * as React from 'react';
import {
  useState,
  useEffect,
  FC,
  useRef,
  RefObject,
  useImperativeHandle,
} from 'react';
import {} from 'antd';
import echarts, {
  ECharts,
  EChartOption,
  EChartsResponsiveOption,
} from 'echarts';
import './index.less';

export interface EchartPageProps {
  opt?: EChartOption | EChartsResponsiveOption;
  cRef?: RefObject<EchartPageExposeFunc>;
}
/**
 * @description: 暴露给外部的方法设置opt
 * @param {*}
 * @return {*}
 */
export interface EchartPageExposeFunc {
  setOption: (opt: EChartOption | EChartsResponsiveOption) => void;
}
const EchartPage: FC<EchartPageProps> = props => {
  const { opt, cRef } = props;
  const charRef = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<ECharts>();
  const [myOpt, setmyOpt] = useState<EChartOption | EChartsResponsiveOption>();
  /**
   * @description: 暴露方法给父组件调用
   * @param {*}
   * @return {*}
   */
  useImperativeHandle(cRef, () => {
    return {
      setOption: (opt: EChartOption | EChartsResponsiveOption) => {
        setmyOpt(opt);
      },
    };
  });
  useEffect(() => {
    if (charRef.current) {
      const chart = echarts.init(charRef.current);
      setMyChart(chart);
      const onResize = () => {
        chart.resize();
      };
      window.addEventListener('resize', onResize);

      return () => {
        // 卸载绑定
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);
  /**
   * @description: 初始化的配置
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    if (myChart && opt) {
      myChart.setOption(opt);
    }
  }, [myChart, opt]);
  /**
   * @description: 重新设置的配置
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    if (myChart && myOpt) {
      myChart.setOption(myOpt);
    }
  }, [myChart, myOpt]);
  return <div className="e-chart-page" ref={charRef}></div>;
};
export default EchartPage;
