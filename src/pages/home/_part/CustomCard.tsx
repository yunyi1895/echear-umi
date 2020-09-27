/*
 * @Author: cmf
 * @Date: 2020-09-23 20:40:31
 * @LastEditTime: 2020-09-23 21:44:27
 * @LastEditors: Please set LastEditors
 * @Description: 卡片组件
 * @FilePath: \echear\src\pages\home\_part\CustomCard.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { Card, Image } from 'antd';
export interface CustomCardProps {
  title: string;
  imgSrc:string;
  routeUrl:string;
  handleClick:(routeUrl:string)=>void;
}

const ss = require("@/assets/img/cloud/thumb.jpg")

const CustomCard: FC<CustomCardProps> = props => {
  const { title ,imgSrc,handleClick,routeUrl} = props;
  return (
    <Card onClick={()=>handleClick(routeUrl)} hoverable={true} title={title} bordered={false}>
      <Image
        preview={false}
        alt={title}
        src={ss}
      />
    </Card>
  );
};

export default CustomCard;
