import * as React from 'react';
import { useState } from 'react';
import { Breadcrumb, Spin, Skeleton } from 'antd';
import { IRouteComponentProps, Link } from 'umi';
import './index.less';

interface PageViewProps {
  linkRrouters?: LinkRrouter[];
  paddingTop?: number;
  paddingBottom?: number;
  isShowCrumb?: boolean;
}

const PageView: React.FC<PageViewProps> = props => {
  const {
    linkRrouters,
    children,
    paddingTop,
    paddingBottom,
    isShowCrumb,
  } = props;
  const styles = {
    paddingTop: paddingTop + 'px',
    paddingBottom: paddingBottom + 'px',
  };
  return (
    <div className="c-page-view" style={styles}>
      {isShowCrumb && (
        <div className="c-page-view-crumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            {linkRrouters && linkRrouters.length > 0
              ? [
                  linkRrouters.map((v, i) => {
                    return (
                      <Breadcrumb.Item key={i}>
                        <Link to={v.address}>{v.name}</Link>
                      </Breadcrumb.Item>
                    );
                  }),
                ]
              : null}
          </Breadcrumb>
        </div>
      )}

      {children}
    </div>
  );
};
PageView.defaultProps = {
  linkRrouters: [{ name: '销售统计', address: '/home' }],
  paddingTop: 20,
  paddingBottom: 20,
  isShowCrumb: true,
};

export default PageView;
