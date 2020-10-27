import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
// import AMap from 'AMap'
import '@amap/amap-jsapi-types';
import './index.less';
var heatData = require('./sh_road_heat.json');

interface MapViewProps {}

const MapView: FC<MapViewProps> = () => {
  const [tilt, settilt] = useState<number>(0);
  const [heading, setheading] = useState<number>(90);
  const [mapObj, setmapObj] = useState<AMap.Map>();
  useEffect(() => {
    var map = new AMap.Map('mapView', {
      features: ['bg', 'road'],
      mapStyle: 'amap://styles/grey', //设置地图的显示样式
      center: [121.564862, 31.194251],
      pitch: 20,
      zoom: 10.4,
      viewMode: '3D',
    });
    setmapObj(map);
    var layer = new Loca.HeatmapLayer({
      map: map,
    });
    layer.setData(heatData, {
      lnglat: function(data: any) {
        return [data.value.lng, data.value.lat];
      },
      value: 'queue_len',
    });
    layer
      .setOptions({
        style: {
          radius: 18,
          color: {
            0.5: '#2c7bb6',
            0.65: '#abd9e9',
            0.7: '#ffffbf',
            0.9: '#fde468',
            1.0: '#d7191c',
          },
        },
      })
      .render();
  }, []);

  return <div className="map-view" id="mapView"></div>;
};

export default MapView;
