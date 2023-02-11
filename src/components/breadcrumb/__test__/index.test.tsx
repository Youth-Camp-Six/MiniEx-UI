/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Breadcrumb } from '..';
import { Dropdown } from '../../dropdown';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Breadcrumb', () => {
  // 快照测试
  it('test Breadcrumb ', () => {
    const options = [
      {
        label: '首页',
        to: '/',
      },
      {
        label: 'Vue',
        to: 'https://vuejs.org',
      },
      {
        label: '商品列表',
        to: '',
        active: true,
      },
      {
        label: (
          <Dropdown
            options={[
              {
                label: '西游记',
                value: '1',
              },
              {
                label: '水浒传',
                value: '2',
              },
            ]}
          >
            <div>纯文本</div>
          </Dropdown>
        ),
        to: '',
      },
    ];
    const wrapper = render(
      <Router>
        <Breadcrumb options={options}></Breadcrumb>
        <Breadcrumb options={options} iconType='shoulder'></Breadcrumb>
      </Router>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
