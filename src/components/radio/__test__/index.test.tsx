/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RadioGroup } from '..';

const radioDataList = [
  { label: 'Unknown', value: '0' },
  { label: 'man', value: '1' },
  { label: 'woman', value: '2' },
];

describe('test RadioGroup comonent', () => {
  it('radio snapshot test', () => {
    const wrapper = render(<RadioGroup value={1} options={radioDataList}></RadioGroup>);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('renders radio options and updates selected value', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <RadioGroup value={1} options={radioDataList} onChange={onChange}></RadioGroup>
    );

    const option0 = wrapper.getByTestId('radio-0');
    const option1 = wrapper.getByTestId('radio-1');
    const option2 = wrapper.getByTestId('radio-2');

    expect(option0).not.toHaveClass('mi-radio-checked');
    expect(option1).toHaveClass('mi-radio-checked');
    expect(option2).not.toHaveClass('mi-radio-checked');
    expect(onChange).not.toHaveBeenCalled();

    option0.click();
    expect(option0).toHaveClass('mi-radio-checked');
    expect(option1).not.toHaveClass('mi-radio-checked');
    expect(option2).not.toHaveClass('mi-radio-checked');
    expect(onChange).toHaveBeenCalledWith('0');
  });
});
