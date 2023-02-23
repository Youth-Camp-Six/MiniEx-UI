import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { IDatePickerProps, TimeDimension } from './type';
import { DatePickerHeader } from './date-picker-header';
import { DateCells } from './date-cells';
import { DatePickerContext } from './date-picker-context';
import './style/date-picker.less';

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { defaultValue, weekFirstDay = 1, validator, type } = props;
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

  return (
    <DatePickerContext.Provider
      value={{
        weekFirstDay,
        displayTime,
        value,
        dimension,
      }}
    >
      <div className='date-picker'>
        <DatePickerHeader onChange={setDisplayTime} onDimensionChange={setDimension} />
        <div className='date-picker__content'>
          <DateCells onClick={onDateCellClick} validator={validator} />
        </div>
      </div>
    </DatePickerContext.Provider>
  );
};
