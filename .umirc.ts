import { defineConfig } from 'umi';
import routes from './config/router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history:{type:'hash'},
  routes,
  externals: {
    echarts: 'window.echarts',
  },
  headScripts: [
    'https://cdn.jsdelivr.net/npm/echarts@4.9.0/dist/echarts.min.js',
    'https://gallerybox.echartsjs.com/dep/echarts/map/js/china.js'
  ]
});
