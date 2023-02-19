import dayjs, { Dayjs } from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { IDayPickerProps, IDayCellProps, HeaderEventType } from './type';
import './style/day-picker.less';
import { PickerHeader } from './picker-header';

const DAY_COUNT = 6 * 7;
const PREFIX = 'day-cell';

const DayCell: React.FC<IDayCellProps> = (props) => {
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

export const DayPicker: React.FC<IDayPickerProps> = (props) => {
  const { defaultValue, weekFirstDay = 1 } = props;
  const [disabledDates] = useState(new Set());
  // first day of current month
  const [now, setNow] = useState(dayjs(defaultValue).date(1));
  // input value
  const [value, setValue] = useState(defaultValue || dayjs());

  const getDatesArr = useCallback((): IDayCellProps[] => {
    const datesArr = new Array(DAY_COUNT);
    const firstWeekDiff = (now.day() - weekFirstDay + 7) % 7;
    for (let i = 0, diff = -firstWeekDiff + 1; i < datesArr.length; ++i, ++diff) {
      const cellValue = now.day(diff);
      datesArr[i] = {
        value: cellValue,
        disable: disabledDates.has(cellValue),
        isThisMonth: now.month() === cellValue.month(),
        selected: value.isSame(cellValue),
      };
    }
    return datesArr;
    // for (let i = -diff + 1; i <= 0; ++i, ++ptr) {
    //   datesArr[ptr] = {
    //     value: i + lastMonthDays,
    //     isThisMonth: false,
    //     disable: disabledDate.has(now.date(i)),
    //   };
    // }
    // for (let i = 1; i <= now.daysInMonth(); ++i, ++ptr) {
    //   datesArr[ptr] = {
    //     value: i,
    //     isThisMonth: true,
    //     disable: disabledDate.has(now.date(i)),
    //     selected: now.date(i) === value,
    //     today: now.diff(dayjs(), 'date') === 0,
    //   };
    // }
    // for (let i = 1; ptr < DAY_COUNT; ++i, ++ptr) {
    //   datesArr[ptr] = {
    //     value: i,
    //     isThisMonth: false,
    //     disable: disabledDate.has(now.date(thisMonthDays + i)),
    //   };
    // }
  }, [disabledDates, now, value, weekFirstDay]);

  const onSwitch = (type: HeaderEventType) => {
    type;
  };

  const [dates, setDates] = useState<IDayCellProps[]>(getDatesArr());
  useEffect(() => {
    setDates(getDatesArr());
  }, [getDatesArr, now]);

  const onDayCellClick = (value: Dayjs) => {
    setValue(value);
  };

  return (
    <div className='day-picker'>
      <PickerHeader
        value={now}
        onChange={(type, value) => setNow(value)}
        onSwitch={(type) => onSwitch(type)}
      />
      <div className='day-picker__content'>
        {dates.map((v) => (
          <DayCell {...v} key={v.value.format('YYYY-MM-DD')} onClick={onDayCellClick} />
        ))}
      </div>
    </div>
  );
};
