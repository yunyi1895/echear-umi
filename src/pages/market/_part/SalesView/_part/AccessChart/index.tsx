import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import { useInitChart } from '@/hooks/index';
import opt from './opt';
interface AccessChartProps {}

const AccessChart: FC<AccessChartProps> = () => {
  const accessRef = useRef<HTMLDivElement>(null);
  const mychart = useInitChart(accessRef);
  useEffect(() => {
    if (mychart) {
      // @ts-ignore
      mychart.setOption({
        ...opt,
      });
    }
  }, [mychart]);
  return (
    <div className="access-chart" ref={accessRef}>
      AccessChart
    </div>
  );
};

export default AccessChart;
