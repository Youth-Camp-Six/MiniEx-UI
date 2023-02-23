import { Dayjs } from 'dayjs';

// type Region = 'CN' | 'US';
// interface WeekKeys extends Record<Region, string> {
//   CN: '一' | '二' | '三' | '四' | '五' | '六' | '日';
//   US: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
// }
export type TimeDimension = 'year' | 'month' | 'date';

export interface IDatePickerContext {
  weekFirstDay: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  displayTime: Dayjs;
  value: Dayjs;
  dimension: TimeDimension;
}

export interface IDatePickerProps {
  // for context
  weekFirstDay?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  defaultValue?: Dayjs;
  type?: TimeDimension;
  // others
  validator?: (date: Dayjs) => boolean;
}

export interface IDatePickerHeader {
  onDimensionChange: (type: TimeDimension) => void;
  onChange: (value: Dayjs) => void;
}
export interface IDateCellProps {
  value: Dayjs;
  onClick: (value: Dayjs) => void;
  isThisMonth: boolean;
  disable?: boolean;
  selected?: boolean;
}

export interface IDateCellsProps {
  onClick: (value: Dayjs) => void;
  validator?: (date: Dayjs) => boolean;
}
