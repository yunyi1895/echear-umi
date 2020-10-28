import * as React from 'react';
import { useState, useEffect, FC, CSSProperties } from 'react';
import ClassNames from 'classnames';
import './index.less';

import icon1 from '@/assets/img/cloud/icon-01.png';
import icon2 from '@/assets/img/cloud/icon-02.png';
import icon3 from '@/assets/img/cloud/icon-03.png';
import icon4 from '@/assets/img/cloud/icon-04.png';
import icon5 from '@/assets/img/cloud/icon-05.png';
import icon6 from '@/assets/img/cloud/icon-05.png';
interface StatisticalProps {
  className: string;
}
const Statistical: FC<StatisticalProps> = props => {
  const { className } = props;
  const classes = ClassNames(['statistical', className]);
  return (
    <div className={classes}>
      <div className="fx-1 fx-row">
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon1} alt="" />
          </div>
          <div className=" data-item">
            <div className="number">3,574</div>
            <div className="name">上市公司数</div>
          </div>
        </div>
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon2} alt="" />
          </div>
          <div className="data-item">
            <div className="number">20,018</div>
            <div className="name">上市证券数</div>
          </div>
        </div>
      </div>
      <div className="fx-1 fx-row">
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon3} alt="" />
          </div>
          <div className=" data-item">
            <div className="number">3,574</div>
            <div className="name">上市公司数</div>
          </div>
        </div>
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon4} alt="" />
          </div>
          <div className="data-item">
            <div className="number">20,018</div>
            <div className="name">上市证券数</div>
          </div>
        </div>
      </div>
      <div className="fx-1 fx-row">
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon5} alt="" />
          </div>
          <div className=" data-item">
            <div className="number">3,574</div>
            <div className="name">上市公司数</div>
          </div>
        </div>
        <div className="fx-1 fx-row fx-row-center fx-row-middle">
          <div className="icon fx-row fx-row-center fx-row-middle">
            <img className="icon_img" src={icon6} alt="" />
          </div>
          <div className="data-item">
            <div className="number">20,018</div>
            <div className="name">上市证券数</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistical;
