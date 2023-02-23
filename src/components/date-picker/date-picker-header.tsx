import React, { useContext } from 'react';
import { IDatePickerHeader } from './type';
import { MiIcon } from '../icon/icon';
import { DatePickerContext } from './date-picker-context';
import './style/date-picker-header.less';

export const DatePickerHeader: React.FC<IDatePickerHeader> = (props) => {
  const { onChange, onDimensionChange } = props;
  const { displayTime, dimension } = useContext(DatePickerContext);
  const currentMonth = displayTime.month();
  const currentYear = displayTime.year();
  return (
    <div className='date-picker-header'>
      <div className='back'>
        <MiIcon.ChevronsLeft onClick={() => onChange(displayTime.year(currentYear - 1))} />
        <MiIcon.ChevronLeft onClick={() => onChange(displayTime.month(currentMonth - 1))} />
      </div>
      <div className='content'>
        <div className='content__year' onClick={() => onDimensionChange('year')}>
          {displayTime.year()}
        </div>
        <div
          style={{ display: dimension === 'date' ? '' : 'none' }}
          className='content__month'
          onClick={() => onDimensionChange('month')}
        >
          {displayTime.format('MMMM')}
        </div>
      </div>
      <div className='forward'>
        <MiIcon.ChevronRight onClick={() => onChange(displayTime.month(currentMonth + 1))} />
        <MiIcon.ChevronsRight onClick={() => onChange(displayTime.year(currentYear + 1))} />
      </div>
    </div>
  );
};
