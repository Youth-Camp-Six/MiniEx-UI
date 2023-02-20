/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Popover } from '..';
import { Button } from '../../button';
const options = [
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
const childrenData = options.map((item) => {
  return <div key={item.value}>{item.label}</div>;
});
describe('Popover', () => {
  // 快照测试
  it('test Popover', () => {
    const wrapper = render(
      <div>
        <Popover childrenData={<div>hello</div>}>纯文本</Popover>
        <Popover childrenData={childrenData}>
          <Button>button</Button>
        </Popover>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
