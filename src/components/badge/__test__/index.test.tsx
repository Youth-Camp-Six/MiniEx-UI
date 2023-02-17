/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Badge } from '..';
import { Avatar } from '../../avatar';

describe('Badge', () => {
  // 快照测试
  it('test case1 for direct use', () => {
    const wrapper = render(
      <div>
        <Badge value='5' />
        <Badge value='15' type='info' />
        <Badge value='65' type='success' />
        <Badge value='9' type='warning' />
        <Badge value='99+' type='error' />
        <Badge round='round' />
        <Badge round='round' type='info' />
        <Badge round='round' type='success' />
        <Badge round='round' type='warning' />
        <Badge round='round' type='error' />
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
  it('test case1 for avatar', () => {
    const wrapper = render(
      <div>
        <Badge value='9' type='info'>
          <Avatar>U</Avatar>
        </Badge>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
