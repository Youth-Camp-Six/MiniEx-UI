/* eslint-disable no-console */
import React from 'react';
import { CheckboxGroup } from '../../../../src/components';

export const Checkbox: React.FC = () => {
  const checkboxOptions = [
    { label: 'beijing', value: 0 },
    { label: 'shanghai', value: 1 },
    { label: 'tianjin', value: 2 },
  ];

  const changeHandler = (e) => {
    console.log('当前value:', e);
  };

  return <CheckboxGroup options={checkboxOptions} onChange={changeHandler}></CheckboxGroup>;
};
