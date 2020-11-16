import * as React from 'react';
import { useState, useEffect, FC, useRef, useMemo } from 'react';
import {} from 'antd';
import { useLocation } from 'umi';
import { useWebSocket } from 'ahooks';
import 'amfe-flexible';
import './index.less';
import classnames from 'classnames';
import { FullScreenContainer } from '@jiaminghi/data-view-react';
interface ScreenProps {}
const Screen: FC<ScreenProps> = props => {
  const { children } = props;
  const messageHistory = useRef([]);
  const localtion = useLocation();
  // 切换不同背景
  const classNamees = useMemo(() => {
    const { pathname } = localtion;
    return classnames('screen-view', {
      'screen-view-bg1':
        pathname === '/screen/global' || pathname === '/screen/world',
      'screen-view-bg2': pathname === '/screen/china',
    });
  }, [localtion]);
  // const [socketUrl, setSocketUrl] = useState('ws://11.11.11.84:8082/websocket/1');
  // 参考文档 https://ahooks.js.org/zh-CN/hooks/state/use-web-socket
  const {
    readyState,
    sendMessage,
    latestMessage,
    disconnect,
    connect,
  } = useWebSocket('ws://11.11.11.84:8080/websocket/server', {
    onMessage: e => {
      console.log('onMessage', e);
    },
  });
  /**
   * @description: 注销wbsocket
   * @param {*}
   * @return {*}
   */
  useEffect(() => {
    return () => {
      disconnect && disconnect();
    };
  }, []);
  const handleClickBtn = () => {
    sendMessage && sendMessage('xxxx');
  };
  return (
    <div className={classNamees}>
      <FullScreenContainer>{children}</FullScreenContainer>
    </div>
  );
};
export default Screen;
