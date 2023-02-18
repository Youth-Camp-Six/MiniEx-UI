/*eslint-disable*/
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Drawer } from '..';

describe('Drawer', () => {
  // 快照测试
  it('test Drawer ', () => {
    const wrapper = render(<Drawer onClose={() => { }}>内容</Drawer>);
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
