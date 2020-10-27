import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import './index.less';
// import { load } from '@2gis/mapgl';
import { Map, Marker, MapvglView, MapvglLayer } from 'react-bmapgl';
import { Point, Map as Map2 } from 'BMapGL';
import { GeoJSON, View } from 'MapVGL';
interface MapViewProps {}
var data: GeoJSON[] = [
  {
    geometry: {
      type: 'Point',
      coordinates: [111.38776185196171, 37.665117309461806],
    },
    properties: { count: 78.68157091827808 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [117.24931491955114, 39.59152855675753],
    },
    properties: { count: 42.422371464322595 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [115.99670948399275, 38.85983012930223],
    },
    properties: { count: 8.329108860892553 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [122.54125735670219, 30.974319705325804],
    },
    properties: { count: 53.31087286963631 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [107.84139084576599, 28.25752457127589],
    },
    properties: { count: 99.24502374239977 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [114.20710148083704, 37.52402656008333],
    },
    properties: { count: 83.79507474367153 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [113.38880718846411, 39.16825903462839],
    },
    properties: { count: 27.745243528200845 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [119.55114956158083, 31.539454678846266],
    },
    properties: { count: 36.45676131353448 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [126.84988100853182, 44.35151420117064],
    },
    properties: { count: 50.348057302940695 },
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.55112872786732, 41.31365220732906],
    },
    properties: { count: 57.85287345730956 },
  },
];

const MapView: FC<MapViewProps> = () => {
  const [center, setcenter] = useState<Point>(
    new BMapGL.Point(116.404449, 39.914889),
  );
  const [mapRef, setmapRef] = useState<Map2>();
  const [mapView, setmapView] = useState<View>();
  const [tilt, settilt] = useState<number>(0);
  const [heading, setheading] = useState<number>(90);
  useEffect(() => {
    if (mapRef) {
    }
  }, []);

  return (
    <div className="map-view" id="mapView">
      <Map
        ref={ref => {
          ref && setmapRef(ref.map);
        }}
        mapStyleV2={{ styleId: '4561bd9797967db02011e936ac14b329' }}
        center={center}
        zoom={12}
        heading={heading}
        tilt={40}
        enableScrollWheelZoom
      >
        {mapRef && (
          <>
            <Marker map={mapRef} icon="blue1" position={center} />
            <MapvglView
              ref={ref => {
                setmapView(ref?.view);
              }}
              map={mapRef}
            >
              {mapView && (
                <MapvglLayer
                  view={mapView}
                  map={mapRef}
                  type="PointLayer"
                  data={data}
                  options={{
                    blend: 'lighter',
                    size: 12,
                    color: 'rgb(255, 53, 0, 0.6)',
                  }}
                />
              )}
            </MapvglView>
          </>
        )}
      </Map>
    </div>
  );
};

export default MapView;
