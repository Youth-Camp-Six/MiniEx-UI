import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { IDatePickerProps, TimeDimension } from './type';
import { DatePickerHeader } from './date-picker-header';
import { DateCells } from './date-cells';
import { DatePickerContext } from './date-picker-context';
import './style/date-picker.less';
import { DefaultCells } from './default-cells';

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const {
    defaultValue,
    validator,
    type,
    region = 'CN',
    weekFirstDay = region === 'CN' ? 1 : 7,
  } = props;
  // input value
  const [value, setValue] = useState(defaultValue || dayjs());
  // the time now shown, setting date to 1 for easier calculation
  const [displayTime, setDisplayTime] = useState(dayjs(value).date(1));
  // cells type
  const [dimension, setDimension] = useState<TimeDimension>(type || 'date');

  const onDateCellClick = (value: Dayjs) => {
    setValue(value);
    setDisplayTime(value.date(1));
  };

  // const onMonthCellClick = (value: number) => {
  //   setDisplayTime(displayTime.month(value))
  // }

  return (
    <DatePickerContext.Provider
      value={{
        weekFirstDay,
        displayTime,
        value,
        dimension,
        region,
      }}
    >
      <div className='date-picker'>
        <DatePickerHeader onChange={setDisplayTime} onDimensionChange={setDimension} />
        <div
          className={`date-picker__content date-picker__content--${
            dimension === 'date' ? 'date' : 'default'
          }`}
        >
          {dimension === 'date' ? (
            <DateCells onClick={onDateCellClick} validator={validator} />
          ) : (
            <DefaultCells />
          )}
        </div>
      </div>
    </DatePickerContext.Provider>
  );
};
