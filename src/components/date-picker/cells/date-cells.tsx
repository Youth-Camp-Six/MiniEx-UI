import React, { useMemo, useContext, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePickerContext } from '../date-picker-context';
import { IDateCellProps, IDateCellsProps } from '../type';

const PREFIX = 'date-cell';
const DAYS_IN_WEEK = 7;
const DAY_COUNT = 6 * 7;

const DateCellsHeader: React.FC<Record<string, never>> = () => {
  const { weekFirstDay } = useContext(DatePickerContext);
  const arr = new Array(DAYS_IN_WEEK);
  const dayjsInstance = dayjs();
  for (let i = 0; i < arr.length; ++i) {
    const dayInNumber = (weekFirstDay + i) % 7;
    arr[i] = (
      <div className='date-cells-header' key={dayInNumber}>
        {dayjsInstance.day(dayInNumber).format('ddd')}
      </div>
    );
  }
  return <>{arr}</>;
};

const DateCell: React.FC<IDateCellProps> = (props) => {
  const { value, isThisMonth, disable, selected, onClick } = props;
  const classList = [`${PREFIX}`];
  if (disable) classList.push(`${PREFIX}--disable`);
  else if (isThisMonth) {
    classList.push(`${PREFIX}--this-month`);
    if (selected) {
      classList.push(`${PREFIX}--selected`);
    } else if (value.isSame(dayjs().format('YYYY-MM-DD'), 'day')) {
      classList.push(`${PREFIX}--today`);
    }
  }
  return (
    <div className={classList.join(' ')} onClick={() => onClick(value)}>
      {value.date()}
    </div>
  );
};

export const DateCells: React.FC<IDateCellsProps> = (props) => {
  const { validator } = props;
  const { weekFirstDay, value, setValue, displayTime, setDisplayTime } =
    useContext(DatePickerContext);
  const cellsData = useMemo((): IDateCellProps[] => {
    const arr = new Array(DAY_COUNT);
    let diff = -((displayTime.day() - weekFirstDay + 7) % 7) + 1;
    for (let i = 0; i < arr.length; ++i, ++diff) {
      const cellValue = displayTime.date(diff);
      arr[i] = {
        value: cellValue,
        disable: validator ? !validator(cellValue) : false,
        isThisMonth: displayTime.month() === cellValue.month(),
        selected: value.isSame(cellValue),
      };
    }
    return arr;
  }, [validator, displayTime, value, weekFirstDay]);
  const onClick = useCallback(
    (value: Dayjs) => {
      setValue(value);
      setDisplayTime(value.date(1));
    },
    [setDisplayTime, setValue]
  );

  return (
    <>
      <DateCellsHeader />
      {cellsData.map((v) => (
        <DateCell {...v} key={v.value.format('YYYY-MM-DD')} onClick={onClick} />
      ))}
    </>
  );
};
