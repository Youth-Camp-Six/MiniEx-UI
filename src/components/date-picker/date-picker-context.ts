import dayjs from 'dayjs';
import { createContext } from 'react';
import { IDatePickerContext, Region } from './type';

export const DatePickerContext = createContext<IDatePickerContext>({} as IDatePickerContext);

export const formatYear = (year: number, region: Region) => {
  return region === 'CN' ? `${year}年` : year;
};

export const formatMonth = (month: number, region: Region) => {
  return region === 'CN' ? `${month + 1}月` : dayjs().month(month).format('MMMM');
};
