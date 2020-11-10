import * as React from 'react';
import {
  useState,
  useEffect,
  FC,
  useRef,
  useLayoutEffect,
  CSSProperties,
} from 'react';
import { useSize } from 'ahooks';
import './index.less';
interface ContainerProps {
  optWidth?: number;
  optHeight?: number;
}

const Container: FC<ContainerProps> = props => {
  const { children, optWidth, optHeight } = props;
  const [width, setwidth] = useState<number>(0);
  const [height, setheight] = useState<number>(0);
  const domRef = useRef<HTMLDivElement>(null);
  const [containerStyle, setcontainerStyle] = useState<CSSProperties>();
  const [originalWidth, setOriginalWidth] = useState<number>(
    window.screen.width,
  ); // 浏览器全屏的宽高
  const [originalHeight, setoriginalHeight] = useState<number>(
    window.screen.height,
  );
  const bodySize = useSize(document.body);
  /**
   * @description: 设置宽高比
   * @param {*}
   * @return {*}
   */

  const updataScale = () => {
    const realWidth = width || originalWidth;
    const realHeight = height || originalHeight;
    console.log(width);
    const widthScale =
      bodySize && bodySize.width ? bodySize.width / realWidth : 1;
    const hightScale =
      bodySize && bodySize.height ? bodySize.height / realHeight : 1;
    setcontainerStyle(v => {
      return {
        ...v,
        transform: `scale(${widthScale}, ${hightScale})`,
      };
    });
  };
  /**
   * @description: 更新container的宽高
   * @param {*}
   * @return {*}
   */
  const updataSize = () => {
    if (domRef && domRef.current) {
      if (width && height) {
        setcontainerStyle({
          width: width + 'px',
          height: height + 'px',
        });
        // 更新container 宽高
      } else {
        setcontainerStyle({
          width: originalWidth + 'px',
          height: originalHeight + 'px',
        });
      }
    }
  };
  useEffect(() => {
    const realWidth = width || originalWidth;
    const realHeight = height || originalHeight;
    console.log(width);
    const widthScale =
      bodySize && bodySize.width ? bodySize.width / realWidth : 1;
    const hightScale =
      bodySize && bodySize.height ? bodySize.height / realHeight : 1;
    setcontainerStyle(v => {
      return {
        ...v,
        transform: `scale(${widthScale}, ${hightScale})`,
      };
    });
  }, [bodySize, width, height, originalWidth, originalHeight]);
  useEffect(() => {
    if (domRef && domRef.current) {
      if (width && height) {
        setcontainerStyle({
          width: width + 'px',
          height: height + 'px',
        });
        // 更新container 宽高
      } else {
        setcontainerStyle({
          width: originalWidth + 'px',
          height: originalHeight + 'px',
        });
      }
    }
  }, [domRef, width, height, originalWidth, originalHeight]);

  /**
   * @description: 获取各种宽高
   * @param {*}
   * @return {*}
   */
  const init = () => {
    if (optHeight && optWidth) {
      // 如果传入了宽和高
      setwidth(optWidth);
      setheight(optHeight);
    } else {
      console.log(domRef);
      if (domRef && domRef.current) {
        console.log(domRef.current.clientWidth);
        //   setwidth(domRef.current.clientWidth);
        // setheight(domRef.current.clientHeight);
      }
    }
  };
  useEffect(() => {
    init();
    //  updataSize();
    //  updataScale()
  }, []);
  return (
    <div
      id="container"
      className="c-container"
      style={containerStyle}
      ref={domRef}
    >
      {domRef.current && domRef.current.clientWidth}
      <br />
      {JSON.stringify(bodySize)}
      <br />
      {children}
    </div>
  );
};

export default Container;
