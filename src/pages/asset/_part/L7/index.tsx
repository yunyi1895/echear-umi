import React, { useState, useEffect, FC } from 'react';
import { Chart } from 'bizcharts';
import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
interface L7Props {}
const L7: FC<L7Props> = props => {
  // const L7AMap = new GaodeMap({
  //   pitch: 35.210526315789465,
  //   style: 'dark',
  //   center: [104.288144, 31.239692],
  //   zoom: 4.4,
  //   token: 'af3a3d49f577aead79940ddbfdc68b53',
  //   plugin: [], // 可以不设置
  // });

  const init = () => {
    const scene = new Scene({
      id: 'l7',
      map: new GaodeMap({
        pitch: 35.210526315789465,
        style: 'dark',
        center: [104.288144, 31.239692],
        zoom: 4.4,
      }),
    });
  };
  useEffect(() => {
    init();
  }, []);
  const {} = props;
  return (
    <>
      <div id="l7" className="l7"></div>
    </>
  );
};
export default L7;
