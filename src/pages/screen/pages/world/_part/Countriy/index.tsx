import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import {} from 'antd';
import {} from 'umi';
import { Bg4 } from '@/components';
import './index.less';
interface CountriyProps {
  flagImg?: string;
}
const Countriy: FC<CountriyProps> = props => {
  const {} = props;
  return (
    <Bg4>
      <div className="countriy fx-row fx-row-center">
        <img
          className="countriy-flag-img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605500001747&di=7e7c2245db4de130f2420c79be459275&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Ff9dcd100baa1cd117f77f31ebd12c8fcc2ce2dce.jpg"
          alt=""
        />

        <div className="countriy-name">
          <div className="countriy-name-cn">文字</div>
          <div className="countriy-name-en">qnibo</div>
        </div>
      </div>
    </Bg4>
  );
};
export default Countriy;
