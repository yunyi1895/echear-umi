import { RefObject, useEffect, useState } from 'react';
import echarts, { ECharts } from 'echarts';
/**
 * @description: mixini 创建 echars对象
 * @param {type}
 * @return {type}
 */
export const useInitChart = (ref: RefObject<HTMLDivElement>) => {
  const [mychart, setmychart] = useState<ECharts>();
  useEffect(() => {
    if (ref.current) {
      const chart = echarts.init(ref.current);
      setmychart(chart);
      const Resize = () => {
        chart.resize();
      };
      window.addEventListener('resize', Resize);
      return () => {
        window.removeEventListener('resize', Resize);
      };
    }
  }, [ref]);
  return mychart;
};
