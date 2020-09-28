import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { EChartOption, ECharts } from 'echarts';
import './index.less';
const shine = require('./shine.json');
const csrcData = require('./csrc-industry.json');
interface CsrcChartProps {}

const CsrcChart: FC<CsrcChartProps> = () => {
  const scrc = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<ECharts>();
  useEffect(() => {
    if (scrc && scrc.current) {
      echarts.registerTheme('shine', shine);
      const c = echarts.init(scrc.current, 'shine');
      c.setOption({
        legend: {
          orient: 'vertical',
          right: 10,
          bottom: 10,
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: '#9aa8d4',
            fontSize: 10,
          },
          // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['40%', '60%'],
            data: csrcData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      });

      setChart(c);
      const Resize = () => {
        c.resize();
      };
      window.addEventListener('resize', Resize);
      return () => {
        window.removeEventListener('resize', Resize);
      };
    }
  }, [scrc]);
  return (
    <div ref={scrc} id="csrc" className="csrc">
      2233
    </div>
  );
};

export default CsrcChart;
