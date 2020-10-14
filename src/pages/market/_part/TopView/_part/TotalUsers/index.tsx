/*
 * @Author: cmf
 * @Date: 2020-10-13 13:47:00
 * @LastEditTime: 2020-10-14 12:52:55
 * @LastEditors: Please set LastEditors
 * @Description: 今日销售数量
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\_part\TotalUsers\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import echarts, { ECharts } from 'echarts';
import './index.less';
interface TotalUsersProps {}

const TotalUsers: FC<TotalUsersProps> = () => {
  const TotalUsersRef = useRef<HTMLDivElement>(null);
  const [myChart, setMyChart] = useState<ECharts>();
  useEffect(() => {
    if (TotalUsersRef.current) {
      const chart = echarts.init(TotalUsersRef.current);
      setMyChart(chart);
      const Resize = () => {
        chart.resize();
      };
      window.addEventListener('resize', Resize);
      return () => {
        window.removeEventListener('resize', Resize);
      };
    }
  }, [TotalUsersRef]);
  useEffect(() => {
    if (myChart) {
      myChart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        tooltip: {},
        xAxis: {
          type: 'value',
          show: false,
        },
        yAxis: {
          show: false,
          type: 'category',
        },
        series: [
          {
            type: 'bar',
            data: [200],
            stack: 'totalUsers', // 合并图形
            itemStyle: {
              color: '#45c946',
            },
            barWidth: '20%',
          },
          {
            // 灰色
            type: 'bar',
            data: [300],
            itemStyle: {
              color: '#eee',
            },
            stack: 'totalUsers', // 合并图形
            barWidth: '20%',
          },
          {
            type: 'custom',
            data: [200],
            stack: 'totalUsers', // 合并图形
            // @ts-ignore
            renderItem: (params: any, api: any) => {
              const value = api.value(0); // 获取值的位置
              const endPoint = api.coord([value, 0]); // 计算实际坐标
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z', // data 数据 可以通过 iconFont 里面的图标的svg信息
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover',
                    },
                    style: {
                      fill: '#45c946', // 自定义图标 填充颜色
                    },
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover',
                    },
                    style: {
                      fill: '#45c946',
                    },
                  },
                ],
              };
            },
          },
        ],
      });
    }
  }, [myChart]);
  return <div ref={TotalUsersRef} className="total-order"></div>;
};

export default TotalUsers;
