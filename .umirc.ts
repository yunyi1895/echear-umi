/*
 * @Author: your name
 * @Date: 2020-11-11 01:00:09
 * @LastEditTime: 2020-11-16 13:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /echear-umi/.umirc.ts
 */
import { defineConfig } from 'umi';
import routes from './config/router';
import px2rem from 'postcss-plugin-px2rem';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: { type: 'hash' },
  routes,
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      rootValue: 192, //开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256;这个值是你拿到的设计稿的宽度/10,例如1920 * 1080的设计稿，此处rootValue:192,如果设计稿的尺寸为3200 * 1080(5*3)的尺寸，此处rootValue: 320;
      propBlackList: [
        'border',
        'border-top',
        'border-left',
        'border-right',
        'border-bottom',
        'border-radius',
      ], //这些属性不需要转换
      selectorBlackList: ['t_npx'], //以包含t_npx的class不需要转换
      exclude: /(node_module)/,
    }),
  ],
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
