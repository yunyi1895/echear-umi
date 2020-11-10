import * as React from 'react';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Button } from 'antd';
import {
  Decoration9,
  Loading,
  FullScreenContainer,
} from '@jiaminghi/data-view-react';
import { useWebSocket } from 'ahooks';
import LineCompontent from './_part/LineCompontent';
import DonutChart from './_part/DonutChart';
import Histogram from './_part/Histogram';
import L7 from './_part/L7';
import './index.less';
enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}
// import useWebSocket, { ReadyState } from 'react-use-websocket';
const Asset = () => {
  const ref = useRef<HTMLDivElement>(null);
  const didUnmount = useRef(false);
  const messageHistory = useRef([]);
  // const [socketUrl, setSocketUrl] = useState('ws://11.11.11.84:8082/websocket/1');
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

  const handleClickBtn = () => {
    sendMessage && sendMessage('xxxx');
  };
  return (
    <div className="asset">
      <FullScreenContainer>
        <div className="fx-column aww">
          <div className="asset-header fx-1"></div>
          <div className="fx-row fx-3">
            <div className="fx-1">
              <div className="asset-part-1">
                {/* 图表的时间宽高是 height+padding */}
                <LineCompontent />
              </div>
            </div>
            <div className="fx-1">
              <DonutChart />
            </div>
            <div className="fx-1">
              <Histogram />
            </div>
          </div>
          <div className=" fx-4">
            <Button
              onClick={() => {
                handleClickBtn();
              }}
            >
              sendMessage
            </Button>
            {/* <L7 /> */}
          </div>
        </div>
      </FullScreenContainer>
    </div>
  );
};

export default Asset;
