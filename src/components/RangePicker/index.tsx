/*
 * @Author: cmf
 * @Date: 2020-09-17 12:02:19
 * @LastEditTime: 2020-09-18 16:29:21
 * @LastEditors: Please set LastEditors
 * @Description: 自定义RangePicker 开始时间只能选择今天之前
 * @FilePath: \evdata-web-umi\src\components\RangePicker\index.tsx
 */
import * as React from 'react';
import { useState, useEffect, FC } from 'react';
import { DatePicker, Form } from 'antd';
import { Rule } from 'antd/lib/form';
import { useDisabledDate } from '@/hook/useHook';
import { Moment } from 'moment';
// import { RangeValue } from 'antd/node_modules/rc-picker/lib/interface';
import { RangePickerProps } from 'antd/lib/date-picker';
export type EventValue<DateType> = DateType | null;
export type RangeValue<DateType> =
  | [EventValue<DateType>, EventValue<DateType>]
  | null;
const { RangePicker } = DatePicker;
type RangePickerItemDateProps = RangePickerProps & {
  itemLabel: string; // Form.Item 的label
  itemName: string; // Form.Item 的name
  itemClassName?: string; // Form.Item 的ClassName
  rangePickerClassName?: string; // rangePickerClassName 的ClassName
  rules?: Rule[]; // 校验规则
};
const RangePickerItemDate: FC<RangePickerItemDateProps> = props => {
  const {
    itemLabel,
    itemName,
    itemClassName,
    rangePickerClassName,
    rules,
  } = props;
  const [dates, setDates] = useState<RangeValue<Moment> | []>();
  // https://codesandbox.io/s/disabled-date-time-ant-design-demo-forked-ydmt6
  // https://github.com/alibaba/hooks/issues/145
  const disabledDate = (current: Moment) => {
    return useDisabledDate(dates, current);
  };

  return (
    <Form.Item
      rules={rules}
      className={itemClassName}
      label={itemLabel}
      name={itemName}
    >
      <RangePicker
        {...props}
        onCalendarChange={dates => {
          setDates(dates);
        }}
        onOpenChange={open => {
          if (!open) {
            setDates([]);
          }
        }}
        className={rangePickerClassName}
        disabledDate={disabledDate}
      />
    </Form.Item>
  );
};
RangePickerItemDate.defaultProps = {
  itemClassName: 'c-form-label-120',
  rangePickerClassName: 'c-date-w-300',
};
export default RangePickerItemDate;
