import React, { useContext, useMemo } from 'react';
import { MiIcon } from '../icon/icon';
import { DatePickerContext, formatMonth, formatYear } from './date-picker-context';
import './style/date-picker-header.less';

export const DatePickerHeader: React.FC = () => {
  const { displayTime, setDisplayTime, dimension, setDimension, region } =
    useContext(DatePickerContext);
  const currentMonth = displayTime.month();
  const currentYear = displayTime.year();

  const content = useMemo(() => {
    const yearBlock = (
      <div className='content__year' onClick={() => setDimension('year')}>
        {formatYear(currentYear, region)}
      </div>
    );
    if (dimension !== 'date') return yearBlock;
    const monthBlock = (
      <div className='content__month' onClick={() => setDimension('month')}>
        {formatMonth(currentMonth, region)}
      </div>
    );
    return region === 'CN' ? (
      <>
        {yearBlock} {monthBlock}
      </>
    ) : (
      <>
        {monthBlock} {yearBlock}
      </>
    );
  }, [currentYear, dimension, currentMonth, region, setDimension]);

  return (
    <div className='date-picker-header'>
      <div className='back'>
        <MiIcon.ChevronsLeft onClick={() => setDisplayTime(displayTime.year(currentYear - 1))} />
        <MiIcon.ChevronLeft onClick={() => setDisplayTime(displayTime.month(currentMonth - 1))} />
      </div>
      <div className='content'>{content}</div>
      <div className='forward'>
        <MiIcon.ChevronRight onClick={() => setDisplayTime(displayTime.month(currentMonth + 1))} />
        <MiIcon.ChevronsRight onClick={() => setDisplayTime(displayTime.year(currentYear + 1))} />
      </div>
    </div>
  );
};
