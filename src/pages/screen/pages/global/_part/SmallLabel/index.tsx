import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import './index.less';
interface SmallLabelProps {}
const SmallLabel: FC<SmallLabelProps> = props => {
  const {} = props;
  return (
    <div className="small-label">
      <div className="small-label-item">
        <span className="small-label-tit">总数</span>
        <span className="small-label-num">82.55%</span>
      </div>
    </div>
  );
};
export default SmallLabel;
