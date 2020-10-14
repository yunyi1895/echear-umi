/*
 * @Author: cmf
 * @Date: 2020-10-13 13:47:00
 * @LastEditTime: 2020-10-13 14:48:57
 * @LastEditors: Please set LastEditors
 * @Description: 累计销售额
 * @FilePath: \echear-umi\src\pages\market\_part\TopView\_part\TotalSales\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import './index.less';
interface TotalSalesProps {}

const TotalSales: FC<TotalSalesProps> = () => {
  return (
    <div id="totalSales" className="compare-wrapper">
      <div className="compare">
        <span>日同比</span>
        <span className="emphasis">22%</span>
        <div className="increase" />
      </div>
      <div className="compare">
        <span>月同比</span>
        <span className="emphasis">44%</span>
        <div className="decrease" />
      </div>
    </div>
  );
};

export const title = '累计销售额';
export const number = '122,233';

export default TotalSales;
