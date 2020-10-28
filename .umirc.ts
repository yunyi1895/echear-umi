import { defineConfig } from 'umi';
import routes from './config/router';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  routes,
  externals: {
    echarts: 'window.echarts',
    // BMapGL:'window.BMapGL',
    // AMap:'window.AMap',
    // Loca:'window.Loca'
    // mapvgl:'window.mapvgl'
  },
  headScripts: [
    'https://cdn.jsdelivr.net/npm/echarts@4.9.0/dist/echarts.min.js',
    'https://gallerybox.echartsjs.com/dep/echarts/map/js/china.js',
    'https://webapi.amap.com/maps?v=1.4.15&key=af3a3d49f577aead79940ddbfdc68b53',
    'https://webapi.amap.com/loca?key=af3a3d49f577aead79940ddbfdc68b53&v=1.3.2',
    'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=DyKZdzm0GEwGcueCnLrQn3zFs6kPDcVO',
    // 'https://unpkg.com/mapvgl/dist/mapvgl.min.js',
    'https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.81/dist/mapvgl.min.js',
    // 'https://mapv.baidu.com/build/mapv.min.js'
  ],
});
