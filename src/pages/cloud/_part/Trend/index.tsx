import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { ECharts } from 'echarts';
import opt from './opt'
import './index.less';
interface TrendProps {}

const Trend: FC<TrendProps> = () => {
  const [chart, setChart] = useState<ECharts>();
  const trend = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //  const trend = document.getElementById('trend');
    if (trend.current) {
      const chart = echarts.init(trend.current);
      setChart(chart);
      const onResize = () => {
        chart.resize();
      };
      chart.setOption(opt);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }
  }, []);

  return <div ref={trend} className="trend" id="trend"></div>;
};
export default Trend;
