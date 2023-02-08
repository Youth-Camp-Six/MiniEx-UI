/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Avatar } from '..';
import { MiIcon } from '../../icon/icon';

describe('Avatar', () => {
  // 快照测试
  it('test case1 for types (string | icon | src)', () => {
    const wrapper = render(
      <div>
        <Avatar>U</Avatar>
        <Avatar icon={<MiIcon.Anchor></MiIcon.Anchor>}></Avatar>
        <Avatar src='https://api.lew.kamtao.com/manage/common/avatar/350/4B78CA/李'></Avatar>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
