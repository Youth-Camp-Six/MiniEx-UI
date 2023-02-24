import dayjs from 'dayjs';
import React, { useState } from 'react';
import { IDatePickerProps, TimeDimension } from './type';
import { DatePickerHeader } from './date-picker-header';
import { DatePickerContext } from './date-picker-context';
import './style/date-picker.less';
import { DateCells } from './cells/date-cells';
import { MonthCells } from './cells/month-cells';
import { YearCells } from './cells/year-cells';

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

  return (
    <DatePickerContext.Provider
      value={{
        weekFirstDay,
        displayTime,
        setDisplayTime,
        value,
        setValue,
        dimension,
        setDimension,
        region,
      }}
    >
      <div className='date-picker'>
        <DatePickerHeader />
        <div
          className={`date-picker__content date-picker__content--${
            dimension === 'date' ? 'date' : 'default'
          }`}
        >
          {dimension === 'date' ? (
            <DateCells validator={validator} />
          ) : dimension === 'month' ? (
            <MonthCells />
          ) : (
            <YearCells />
          )}
        </div>
      </div>
    </DatePickerContext.Provider>
  );
};
