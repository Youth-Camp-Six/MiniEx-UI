/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputTag } from '..';

describe('InputTag', () => {
  // 快照测试
  it('test case1 for direct use', () => {
    const wrapper = render(
      <div>
        <InputTag></InputTag>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
