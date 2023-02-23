import React, { useCallback, useContext, useMemo } from 'react';
import { IDatePickerHeader } from './type';
import { MiIcon } from '../icon/icon';
import { DatePickerContext } from './date-picker-context';
import './style/date-picker-header.less';

export const DatePickerHeader: React.FC<IDatePickerHeader> = (props) => {
  const { onChange, onDimensionChange } = props;
  const { displayTime, dimension, region } = useContext(DatePickerContext);
  const currentMonth = displayTime.month();
  const currentYear = displayTime.year();

  const yearContent = useMemo(() => {
    const year = displayTime.year();
    switch (dimension) {
      case 'year': {
        const startYear = year - (year % 10);
        return `${startYear}-${startYear + 9}`;
      }
      case 'decade': {
        const startYear = year - (year % 100);
        return `${startYear}-${startYear + 99}`;
      }
      default:
        return year;
    }
  }, [displayTime, dimension]);

  const onYearClick = useCallback(() => {
    if (dimension === 'decade') {
      return;
    } else if (dimension === 'year') {
      onDimensionChange('decade');
    } else {
      onDimensionChange('year');
    }
  }, [dimension, onDimensionChange]);

  const content = useMemo(() => {
    const yearBlock = (
      <div className='content__year' onClick={onYearClick}>
        {yearContent}
      </div>
    );
    if (dimension !== 'date') return yearBlock;
    const monthBlock = (
      <div
        style={{ display: dimension === 'date' ? '' : 'none' }}
        className='content__month'
        onClick={() => onDimensionChange('month')}
      >
        {region === 'CN' ? `${displayTime.month() + 1}月` : displayTime.format('MMMM')}
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
  }, [dimension, displayTime, onDimensionChange, region, yearContent, onYearClick]);

  return (
    <div className='date-picker-header'>
      <div className='back'>
        <MiIcon.ChevronsLeft onClick={() => onChange(displayTime.year(currentYear - 1))} />
        <MiIcon.ChevronLeft onClick={() => onChange(displayTime.month(currentMonth - 1))} />
      </div>
      <div className='content'>{content}</div>
      <div className='forward'>
        <MiIcon.ChevronRight onClick={() => onChange(displayTime.month(currentMonth + 1))} />
        <MiIcon.ChevronsRight onClick={() => onChange(displayTime.year(currentYear + 1))} />
      </div>
    </div>
  );
};
