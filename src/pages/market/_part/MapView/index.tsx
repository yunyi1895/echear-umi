import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import { Card, Radio, Row, Col } from 'antd';
// import AMap from 'AMap'
import '@amap/amap-jsapi-types'; // 引入高德地图 ts
import './index.less';
//import Amap from './_part/Amap';
import Bmap from './_part/Bmap';
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmapgl';
interface MapViewProps {}

const MapView: FC<MapViewProps> = () => {
  const [tilt, settilt] = useState<number>(0);
  const [heading, setheading] = useState<number>(90);

  return (
    <Row className="map" gutter={16}>
      <Col span={12}>{/* <Amap /> */}</Col>
      <Col span={12}>
        <Bmap />
      </Col>
    </Row>
  );
};

export default MapView;
