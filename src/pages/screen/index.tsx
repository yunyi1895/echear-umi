import * as React from 'react';
import { useState, useEffect, FC, useRef } from 'react';
import {} from 'antd';
import { useWebSocket } from 'ahooks';
import './index.less';
import { FullScreenContainer } from '@jiaminghi/data-view-react';
interface ScreenProps {}
const Screen: FC<ScreenProps> = props => {
  const { children } = props;
  const messageHistory = useRef([]);
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
    <div className="screen-view">
      <FullScreenContainer>{children}</FullScreenContainer>
    </div>
  );
};
export default Screen;
