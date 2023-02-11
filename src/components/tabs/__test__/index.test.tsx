/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Tabs } from '..';

describe('Breadcrumb', () => {
  // 快照测试
  it('test all TabsProps ', () => {
    const options = [
      { label: '北京', value: '1' },
      { label: '上海', value: '2' },
      { label: '广州', value: '3' },
      { label: '深圳', value: '4' },
      { label: '乌鲁木齐', value: '5' },
    ];
    const wrapper = render(
      <div>
        <Tabs options={options}></Tabs> <br />
        <br />
        <Tabs
          round='round'
          options={[
            { label: 'Light', value: '1' },
            { label: 'Dark', value: '2' },
          ]}
        ></Tabs>
        <br />
        <br />
        <Tabs type='line' options={options}></Tabs>
        <br />
        <br />
        <Tabs itemWidth='120px' options={options}></Tabs>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
