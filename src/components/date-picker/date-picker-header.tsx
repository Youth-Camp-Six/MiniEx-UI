import React from 'react';
import { IDatePickerHeader } from './type';
import { MiIcon } from '../icon/icon';
import './style/date-picker-header.less';

export const DatePickerHeader: React.FC<IDatePickerHeader> = (props) => {
  const { value, onChange, onSwitch } = props;
  const currentMonth = value.month();
  const currentYear = value.year();
  return (
    <div className='date-picker-header'>
      <div className='back'>
        <MiIcon.ChevronsLeft onClick={() => onChange('year', value.year(currentYear - 1))} />
        <MiIcon.ChevronLeft onClick={() => onChange('month', value.month(currentMonth - 1))} />
      </div>
      <div className='content'>
        <div className='content__year' onClick={() => onSwitch('year')}>
          {value.year()}
        </div>
        <div className='content__month' onClick={() => onSwitch('month')}>
          {value.format('MMMM')}
        </div>
      </div>
      <div className='forward'>
        <MiIcon.ChevronRight onClick={() => onChange('month', value.month(currentMonth + 1))} />
        <MiIcon.ChevronsRight onClick={() => onChange('year', value.year(currentYear + 1))} />
      </div>
    </div>
  );
};
