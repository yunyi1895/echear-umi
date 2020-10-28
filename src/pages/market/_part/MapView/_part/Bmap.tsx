/*
 * @Author: cmf
 * @Date: 2020-10-28 10:40:15
 * @LastEditTime: 2020-10-28 15:07:49
 * @LastEditors: Please set LastEditors
 * @Description: 百度地图全是坑,但是效果好，独此一家
 * @FilePath: \echear-umi\src\pages\market\_part\MapView\_part\Bmap.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { darkStyle } from './bmapStyle';
interface BmapViewProps {}
const carData = require('./car.json');
const BmapView: FC<BmapViewProps> = () => {
  const [map, setmap] = useState<any>();
  /**
   * @description: 初始化地图
   * @param {*}
   * @return {*}
   */
  const [view, setview] = useState<any>();
  const initMap = () => {
    var bmapgl = new BMapGL.Map('map_container', {
      restrictCenter: false,
    });
    bmapgl.enableKeyboard(); //启用键盘操作
    // bmapgl.enableScrollWheelZoom();//允许地图可被鼠标滚轮缩放
    bmapgl.enableInertialDragging(); //启用地图惯性拖拽
    //   bmapgl.enableContinuousZoom();//开启双击平滑缩放效果
    bmapgl.setMapStyleV2({
      styleJson: darkStyle,
      // styleId: '4561bd9797967db02011e936ac14b329'
    });
    bmapgl.centerAndZoom(new BMapGL.Point(106.560734, 29.566986), 13);
    bmapgl.setTilt(60);
    setmap(bmapgl);
    var view = new mapvgl.View({
      map: bmapgl,
    });
    setview(view);
  };
  useEffect(() => {
    initMap();
  }, []);
  /**
   * @description: 渲染Layer
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    if (view) {
      var lineLayer = new mapvgl.SimpleLineLayer({
        color: 'rgba(55, 55, 255, 0.11)',
      });
      view.addLayer(lineLayer);
      lineLayer.setData(carData);
      let linePointLayer = new mapvgl.LinePointLayer({
        size: 5,
        speed: 1,
        color: 'rgba(255, 255, 0, 0.6)',
        blend: 'lighter',
        animationType: mapvgl.LinePointLayer.ANIMATION_TYPE_SMOOTH,
        shapeType: mapvgl.LinePointLayer.SHAPE_TYPE_CIRCLE,
      });
      view.addLayer(linePointLayer);
      linePointLayer.setData(carData);
    }
  }, [view]);
  /**
   * @description: 帧动画
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    var keyFrames = [
      {
        center: new BMapGL.Point(106.560734, 29.566986), // 定义第一个关键帧帧地图中心点
        zoom: 13, // 定义第一个关键帧地图等级
        tilt: 60, // 定义第一个关键帧地图倾斜角度
        heading: 0, // 定义第一个关键帧地图旋转方向
        percentage: 0, // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
      },
      {
        center: new BMapGL.Point(106.560734, 29.566986), // 定义第二个关键帧地图中心点
        zoom: 13, // 定义第二个关键帧地图等级
        tilt: 60, // 定义第二个关键帧地图倾斜角度
        heading: 180, // 定义第二个关键帧地图旋转方向
        percentage: 0.5, // 定义第二个关键帧处于动画过程的百分比，取值范围0~1
      },
      {
        center: new BMapGL.Point(106.560734, 29.566986), // 定义第三个关键帧地图中心点
        zoom: 13, // 定义第三个关键帧地图等级
        tilt: 60, // 定义第三个关键帧地图倾斜角度
        heading: 360, // 定义第三个关键帧地图旋转方向
        percentage: 1, // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
      },
    ];
    var opts = {
      duration: 10000, // 设置每次迭代动画持续时间
      delay: 3000, // 设置动画延迟开始时间
      interation: 'INFINITE', // 设置动画迭代次数
    };
    var animation = new BMapGL.ViewAnimation(keyFrames, opts);
    if (map) {
      map.startViewAnimation(animation);
    }
  }, [map]);

  return <div id="map_container" className="map_container"></div>;
};

export default BmapView;
