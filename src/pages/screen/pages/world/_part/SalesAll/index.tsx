import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import { Bg4 } from '@/components';
import './index.less';
interface SalesAllProps {}
const SalesAll: FC<SalesAllProps> = props => {
  const {} = props;
  return (
    <Bg4>
      <div className="sales-all fx-row ">
        <div className="fx-1 sales-all-item">
          <div className="sales-all-tit-cn">新能源售量</div>
          <div className="sales-all-tit-en">NEV sales volume</div>
          <div className="sales-all-tit-num">
            106
            <text className="sales-all-tit-num-unit">万</text>
          </div>
        </div>
        <div className="fx-1 sales-all-item">
          <div className="sales-all-tit-cn">新能源渗透率</div>
          <div className="sales-all-tit-en">NEV sales volume</div>
          <div className="sales-all-tit-num">
            106<text className="sales-all-tit-num-unit">%</text>
          </div>
        </div>
      </div>
    </Bg4>
  );
};
export default SalesAll;
