import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import { Header } from '@/components';
import CalendarYearSales from './_part/CalendarYearSales';
import LastYearSales from './_part/LastYearSales';
import StructureYearCalendar from './_part/StructureYearCalendar';
import StructureLastYear from './_part/StructureLastYear';
interface ChinaProps {}
const China: FC<ChinaProps> = props => {
  const {} = props;
  return (
    <div className="china fx-column">
      <Header title="中国新能源销量数据" />
      <div className="china-content fx-1 fx-row">
        <div className="fx-3 fx-column china-left">
          <div className="fx-1">
            <CalendarYearSales />
          </div>
          <div className="china-gap-2"></div>
          <div className="fx-1">
            <LastYearSales />
          </div>
        </div>
        <div className="fx-2"></div>
        <div className="fx-3 fx-column china-right">
          <div className="fx-1">
            <StructureYearCalendar />
          </div>
          <div className="china-gap-2"></div>
          <div className="fx-1">
            <StructureLastYear />
          </div>
        </div>
      </div>
    </div>
  );
};
export default China;
