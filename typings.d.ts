// <reference path="node_modules/_@types_bmapgl@0.0.3@@types/bmapgl/index.d.ts" />
// <reference path="node_modules/@2gis/mapgl/global.d.ts" />

declare module '@jiaminghi/data-view-react';
declare const BMapGL: any; // 百度地图
declare const mapvgl: any; // 百度地图可视化
declare const mapv: any; // 百度地图mapv
declare const Loca: any; // 高德地图可视化
// declare const AMap: any
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
// 路由权限
interface MenuObj {
  id: string;
  iconSkin?: string;
  urlPath?: string;
  systemName?: string;
  name?: string;
  pid?: string;
}

interface InitState {}

interface InitialState extends InitState {}

// PageView 里面的
interface LinkRrouter {
  name: string;
  address: string;
}

// 请求参数
interface Params {
  [key: string]: any;
}

interface WindowSize {
  width?: number;
  height?: number;
}

interface FormParams {
  [key: string]: any;
}

interface DomSize {
  width?: number;
  height?: number;
}
// 接口返回参数
interface AjaxRes {
  code?: string;
  data?: any;
  message?: string;
}
// 表格统一请求参数
interface TableParams {
  pageSize: number;
  pageNum: number;
  [key: string]: any;
}
// 表格大小
interface TableSize {
  width?: number;
  height?: number;
}
