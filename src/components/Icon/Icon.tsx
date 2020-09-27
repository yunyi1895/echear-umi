import React from 'react';
import Classnames from 'classnames';
import { createFromIconfontCN } from '@ant-design/icons';
import { IconFontProps } from '@ant-design/icons/lib/components/IconFont';
type ThemeType = 'success' | 'default' | 'danger' | 'warning';

const MyIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2048740_7tjqmcn3ezc.js', // 在 iconfont.cn 上生成
});

interface IconProps extends IconFontProps {
  className?: string;
  temes?: ThemeType;
}

const Icon: React.FC<IconProps> = props => {
  const { type, temes, className, ...resetProps } = props;
  const classes = Classnames('c_icon', className, { [`icon-${temes}`]: temes });
  return <MyIcon className={classes} type={type} {...resetProps} />;
};
Icon.defaultProps = {
  temes: 'default',
};
export default Icon;
