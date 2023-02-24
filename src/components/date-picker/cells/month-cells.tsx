import React, { useCallback, useContext, useMemo } from 'react';
import { formatMonth, DatePickerContext } from '../date-picker-context';

const CELLS_COUNT = 12;

export const MonthCells: React.FC = () => {
  const { region, displayTime, setDisplayTime, setDimension } = useContext(DatePickerContext);
  const cellsData = useMemo(
    () => new Array(CELLS_COUNT).fill(0).map((v, i) => formatMonth(i, region)),
    [region]
  );
  const onClick = useCallback(
    (month: number) => {
      setDisplayTime(displayTime.month(month));
      setDimension('date');
    },
    [setDisplayTime, displayTime, setDimension]
  );
  return (
    <>
      {cellsData.map((value, index) => (
        <div key={index} onClick={() => onClick(index)} className='month-cell'>
          {value}
        </div>
      ))}
    </>
  );
};
