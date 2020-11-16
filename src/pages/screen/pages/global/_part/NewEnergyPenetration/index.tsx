/*
 * @Author: cmf
 * @Date: 2020-11-11 15:25:34
 * @LastEditTime: 2020-11-16 16:10:38
 * @LastEditors: Please set LastEditors
 * @Description: 全球新能源车渗透率
 * @FilePath: /echear-umi/src/pages/screen/pages/global/_part/NewEnergyPenetration/index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import {} from 'antd';
import { Bg2, EchartPage } from '@/components';
import opt from './opt';
import { EchartPageExposeFunc } from '@/components/EchartPage';
import SmallLabel from '../SmallLabel';
import './index.less';

interface NewEnergyPenetrationProps {}

const NewEnergyPenetration: FC<NewEnergyPenetrationProps> = props => {
  const {} = props;
  const eChartRef = useRef<EchartPageExposeFunc>(null);
  useEffect(() => {
    // eChartRef.current?.setOption(opt)
  }, []);
  return (
    <Bg2>
      <EchartPage cRef={eChartRef} opt={opt} />
      <SmallLabel />
    </Bg2>
  );
};
export default NewEnergyPenetration;
