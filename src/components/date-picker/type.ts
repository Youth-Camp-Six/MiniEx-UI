import { Dayjs } from 'dayjs';

// type Region = 'CN' | 'US';
// interface WeekKeys extends Record<Region, string> {
//   CN: '一' | '二' | '三' | '四' | '五' | '六' | '日';
//   US: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
// }

export interface IDatePickerProps {
  defaultValue?: Dayjs;
  weekFirstDay?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  validator?: (date: Dayjs) => boolean;
}

export type HeaderEventType = 'year' | 'month' | 'date';

export interface IDatePickerHeader {
  value: Dayjs;
  onSwitch: (type: HeaderEventType) => void;
  onChange: (type: HeaderEventType, value: Dayjs) => void;
}
export interface IDateCellProps {
  value: Dayjs;
  isThisMonth: boolean;
  disable?: boolean;
  selected?: boolean;
  // today?: boolean;
  onClick: (value: Dayjs) => void;
}
