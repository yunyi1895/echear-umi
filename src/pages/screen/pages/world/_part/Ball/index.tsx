import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import './index.less';
const earthGif = require('../../../../../../assets/img/base/earth.gif');

interface BallProps {}
const Ball: FC<BallProps> = props => {
  const {} = props;
  return (
    <div className="ball">
      <img className="earth-gif" src={earthGif} alt="" />
    </div>
  );
};
export default Ball;
