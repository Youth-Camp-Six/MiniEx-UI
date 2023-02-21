/* eslint-disable no-console */
import React from 'react';
import type { ReactNode } from 'react';
import { Select } from '../../../../src/components';

  interface IProps {
    children?: ReactNode;
  }
  const header='Select title'
  const defaultValue1 = '';
  const defaultValue2 = [];
  const options = [
    {
      label: 'Guangdong',
      value: '1'
    },
    {
      label: 'Shenzhen',
      value: '2',
    },
    {
      label: 'Hangzhou',
      value: '3',
    },
    {
      label: 'Shanghai',
      value: '4',
    },
    {
      label: 'Beijing',
      value: '5',
    },
  ];
  const handleSelect = (e:Event) => {
    console.log(e);
  }

export const RadioSelect: React.FC<IProps> = () => {
  return <Select
            header={header}
            modelValue={defaultValue1}
            options={options}
            handleChange={(e) => handleSelect(e)}
          ></Select>;
};
export const MultipleSelect: React.FC<IProps> = () => {
  return <Select
            modelValue={defaultValue2}
            options={options}
            header={header}
            multiple
            handleChange={(e) => handleSelect(e)}
          ></Select>
}
