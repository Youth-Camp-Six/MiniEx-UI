/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Dropdown, DropdownOptions } from '..';
import { Button } from '../../button';

const options: DropdownOptions[] = [
  {
    label: '西游记',
    value: '1',
  },
  {
    label: '水浒传',
    value: '2',
  },
  {
    label: '三国演义',
    value: '3',
  },
  {
    label: '红楼梦',
    value: '4',
  },
];
describe('Dropdown', () => {
  // 快照测试
  it('test case1 for ', () => {
    const wrapper = render(
      <div>
        <Dropdown options={options}>
          <Button>hover</Button>
        </Dropdown>
        <Dropdown options={options} trigger='click'>
          <Button>click</Button>
        </Dropdown>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
