import * as React from 'react';
import { useState, useEffect } from 'react';

import './index.less';
const Header = () => {
  return (
    <div className="cloud_header">
      <div className="cloud_header_info cloud_header_l">
        数据来源：上交所 & 深交所
      </div>
      <h3 className="cloud_header_title">上市公司全景概览</h3>
      <div className="cloud_header_info cloud_header_r">数据日期：</div>
    </div>
  );
};
export default Header;
