import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { Radio, DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
interface CardMoreProps {}
const optionsWithDisabled = [
  { label: '今日', value: 'Apple' },
  { label: '本周', value: 'Pear' },
  { label: '本月', value: 'Orange' },
  { label: '今年', value: 'Blwnz' },
];

const CardMore: FC<CardMoreProps> = () => {
  const [radioValue, setradioValue] = useState<string>('Apple');
  const handleChangeRadio = (value: string) => {
    setradioValue(value);
  };
  return (
    <Space size={16}>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={e => handleChangeRadio(e.target.value)}
        value={radioValue}
        optionType="button"
        buttonStyle="solid"
        size="small"
      />
      <RangePicker size="small" />
    </Space>
  );
};

export default CardMore;
