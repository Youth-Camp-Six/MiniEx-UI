/* eslint-disable no-console */
import React from 'react';
import type { ReactNode } from 'react';
import { RadioGroup } from '../../../../src';

interface IProps {
  children?: ReactNode;
}

export const RadioUSBasic: React.FC<IProps> = () => {
  const options = [
    { label: 'A', value: '0' },
    { label: 'B', value: '1' },
    { label: 'C', value: '2' },
  ];

  const defaultValue = '0';

  const changeHandler = (e) => {
    console.log('current value:', e);
  };

  return <RadioGroup options={options} value={defaultValue} onChange={changeHandler}></RadioGroup>;
};
