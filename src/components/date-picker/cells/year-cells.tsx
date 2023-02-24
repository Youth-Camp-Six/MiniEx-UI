import React, { useCallback, useContext, useMemo } from 'react';
import { DatePickerContext } from '../date-picker-context';

const START_YEAR = 1800;
const END_YEAR = 2200;

export const YearCells: React.FC = () => {
  const { displayTime, setDisplayTime, setDimension } = useContext(DatePickerContext);
  const cellsData = useMemo(() => {
    const arr = [];
    for (let i = START_YEAR; i <= END_YEAR; ++i) arr.push(i);
    return arr;
  }, []);
  const onClick = useCallback(
    (year: number) => {
      setDisplayTime(displayTime.year(year));
      setDimension('month');
    },
    [setDisplayTime, displayTime, setDimension]
  );
  return (
    <>
      {cellsData.map((year) => (
        <div key={year} onClick={() => onClick(year)} className='year-cell'>
          {year}
        </div>
      ))}
    </>
  );
};
