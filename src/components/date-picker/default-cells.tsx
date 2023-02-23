import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
// import dayjs from 'dayjs';

// const PREFIX = 'month-cell';
// const MONTHS_IN_YEAR = 12;
const MONTHS_COUNT = 16;
const CHINESE_NUMBERS = [
  '一',
  '二',
  '三',
  '四',
  '五',
  '六',
  '七',
  '八',
  '九',
  '十',
  '十一',
  '十二',
];
export const DefaultCells = () => {
  const { displayTime, region } = useContext(DatePickerContext);
  const cellsData = new Array(MONTHS_COUNT).fill(0);
  if (region === 'CN') cellsData.forEach((_, i, self) => (self[i] = CHINESE_NUMBERS[i]));
  else cellsData.forEach((_, i, self) => (self[i] = displayTime.month(i).format('MMM')));
  return (
    <>
      {cellsData.map((v) => (
        <div key={v}>{v}</div>
      ))}
    </>
  );
};
