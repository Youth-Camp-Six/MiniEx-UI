/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CheckboxGroup } from '..';

describe('test CheckboxGroup comonent', () => {
  const checkBoxOptions = [
    { label: 'labe-0', value: 0 },
    { label: 'labe-1', value: 1 },
    { label: 'labe-2', value: 2 },
  ];

  const checkBoxValue = [1, 2];

  it('checkbox snapshot test', () => {
    const onChange = jest.fn();

    const wrapper = render(
      <CheckboxGroup
        value={[1, 2]}
        options={checkBoxOptions}
        onChange={onChange}
        round
      ></CheckboxGroup>
    );

    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('Checkbox checked test', () => {
    const onChange = jest.fn();
    const wrapper = render(
      <CheckboxGroup
        value={checkBoxValue}
        options={checkBoxOptions}
        onChange={onChange}
        round
      ></CheckboxGroup>
    );

    expect(wrapper.container.querySelector('Label')?.childElementCount).toBe(3);

    const checkbox0 = wrapper.getByTestId('checkbox-0');
    const checkbox1 = wrapper.getByTestId('checkbox-1');
    const checkbox2 = wrapper.getByTestId('checkbox-2');

    expect(checkbox0).not.toHaveClass('mi-checkbox-checked');
    expect(checkbox1).toHaveClass('mi-checkbox-checked');
    expect(checkbox2).toHaveClass('mi-checkbox-checked');
  });
});
