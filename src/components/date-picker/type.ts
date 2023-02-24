import { Dayjs } from 'dayjs';

export type Region = 'CN' | 'US';
// interface WeekKeys extends Record<Region, string> {
//   CN: '一' | '二' | '三' | '四' | '五' | '六' | '日';
//   US: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
// }
export type TimeDimension = 'date' | 'month' | 'year' | 'decade';

export interface IDatePickerContext {
  region: Region;
  weekFirstDay: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  displayTime: Dayjs;
  setDisplayTime: (displayTime: Dayjs) => void;
  value: Dayjs;
  setValue: (value: Dayjs) => void;
  dimension: TimeDimension;
  setDimension: (dimension: TimeDimension) => void;
}

export interface IDatePickerProps {
  // for context
  region: Region;
  weekFirstDay?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  defaultValue?: Dayjs;
  type?: TimeDimension;
  // others
  validator?: (date: Dayjs) => boolean;
}

export interface IDateCellProps {
  value: Dayjs;
  onClick: (value: Dayjs) => void;
  isThisMonth: boolean;
  disable?: boolean;
  selected?: boolean;
}

export interface IDateCellsProps {
  validator?: (date: Dayjs) => boolean;
}