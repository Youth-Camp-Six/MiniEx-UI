import { createContext } from 'react';
import { IDatePickerContext } from './type';

export const DatePickerContext = createContext<IDatePickerContext>({} as IDatePickerContext);
