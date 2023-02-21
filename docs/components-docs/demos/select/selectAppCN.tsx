/* eslint-disable no-console */
import React from 'react';
import type { ReactNode } from 'react';
import { Select,Title } from '../../../../src/components';

  interface IProps {
    children?: ReactNode;
  }
  const header='选择标题'
  const defaultValue1 = '';
  const defaultValue2 = [];
  const options = [
    {
      label: '广东',
      value: '1'
    },
    {
      label: '深圳',
      value: '2',
    },
    {
      label: '杭州',
      value: '3',
    },
    {
      label: '上海',
      value: '4',
    },
    {
      label: '北京',
      value: '5',
    },
  ];
const handleSelect = (e: Event) => {
    console.log(e);
  }

export const RadioSelect: React.FC<IProps> = () => {
  return <div>
    <Title size='s'>click触发</Title>
    <Select
            header={header}
            modelValue={defaultValue1}
            options={options}
            handleSelect={(e) => handleSelect(e)}
    ></Select>
    <Title size='s'>hover触发</Title>
    <Select
            header={header}
            modelValue={defaultValue1}
            options={options}
            handleSelect={(e) => handleSelect(e)}
            trigger={'hover'}
          ></Select>
  </div>
;
};
export const MultipleSelect: React.FC<IProps> = () => {
  return <Select
            modelValue={defaultValue2}
            options={options}
            header={header}
            multiple
            handleSelect={(e) => handleSelect(e)}
          ></Select>
}
