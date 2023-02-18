/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MiIcon } from '../icon';

describe('MiIcon', () => {
  // 快照测试
  it('test MiIcon', () => {
    const wrapper = render(
      <div>
        <MiIcon.Activity></MiIcon.Activity>
        <MiIcon.Anchor></MiIcon.Anchor>
      </div>
    );
    expect(wrapper.container.firstChild).toMatchSnapshot();
  });
});
