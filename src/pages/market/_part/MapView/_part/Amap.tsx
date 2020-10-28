import * as React from 'react';
import { useState, useEffect, FC } from 'react';
const heatData = require('../sh_road_heat.json');

interface AmapViewProps {}

const AmapView: FC<AmapViewProps> = () => {
  const [mapObj, setmapObj] = useState<AMap.Map>();
  /**
   * @description: 创建地图
   * @param {*}
   * @return {*}
   */
  const initMap = () => {
    var map = new AMap.Map('map_content', {
      features: ['bg', 'road'],
      mapStyle: 'amap://styles/grey', //设置地图的显示样式
      center: [121.564862, 31.194251],
      pitch: 20,
      zoom: 10.4,
      viewMode: '3D',
    });
    setmapObj(map);
  };
  /**
   * @description: 创建Layer 并且渲染
   * @param {*}
   * @return {*}
   */
  const initLayer = () => {
    var layer = new Loca.HeatmapLayer({
      map: mapObj,
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
  };
  useEffect(() => {
    initMap();
  }, []);
  useEffect(() => {
    if (mapObj) {
      initLayer();
    }
  }, [mapObj]);
  return <div id="map_content" className="map_content"></div>;
};

export default AmapView;
