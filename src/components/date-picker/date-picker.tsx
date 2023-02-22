import dayjs, { Dayjs } from 'dayjs';
import React, { useMemo, useState } from 'react';
import { IDatePickerProps, IDateCellProps, HeaderEventType } from './type';
import './style/date-picker.less';
import { DatePickerHeader } from './date-picker-header';

const DAY_COUNT = 6 * 7;
const DAYS_IN_WEEK = 7;

const DateCell: React.FC<IDateCellProps> = (props) => {
  const PREFIX = 'date-cell';
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

const DateCellsHeader: React.FC<Pick<IDatePickerProps, 'weekFirstDay'>> = ({
  weekFirstDay = 7,
}) => {
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

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { defaultValue, weekFirstDay = 1, validator } = props;
  // input value
  const [value, setValue] = useState(defaultValue || dayjs());
  // first day of current month
  const [now, setNow] = useState(dayjs(value).date(1));

  const datesArr = useMemo((): IDateCellProps[] => {
    const datesArr = new Array(DAY_COUNT);
    let diff = -((now.day() - weekFirstDay + 7) % 7) + 1;
    for (let i = 0; i < datesArr.length; ++i, ++diff) {
      const cellValue = now.date(diff);
      datesArr[i] = {
        value: cellValue,
        disable: validator ? !validator(cellValue) : false,
        isThisMonth: now.month() === cellValue.month(),
        selected: value.isSame(cellValue),
      };
    }
    return datesArr;
  }, [validator, now, value, weekFirstDay]);

  const onDateCellClick = (value: Dayjs) => {
    setValue(value);
    setNow(value.date(1));
  };

  const onHeaderSwitch = (type: HeaderEventType) => {
    type;
  };

  return (
    <div className='date-picker'>
      <DatePickerHeader
        value={now}
        onChange={(type, value) => setNow(value)}
        onSwitch={(type) => onHeaderSwitch(type)}
      />
      <div className='date-picker__content'>
        <DateCellsHeader />
        {datesArr.map((v) => (
          <DateCell {...v} key={v.value.format('YYYY-MM-DD')} onClick={onDateCellClick} />
        ))}
      </div>
    </div>
  );
};
