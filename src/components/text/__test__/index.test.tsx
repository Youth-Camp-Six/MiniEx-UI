/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Text } from '..';
import { render } from '@testing-library/react';

describe('Text', () => {
  it('default text', () => {
    const { container } = render(<Text title='123' />);
    // console.log(container);
    expect(container.firstChild).toMatchSnapshot();
  });
});
