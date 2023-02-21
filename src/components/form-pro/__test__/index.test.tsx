/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Field, FormPro, useForm } from '..';
import { Button, CheckboxGroup, RadioGroup } from '../../../../src/components';

const radioOptions = [
  { label: 'Unknown', value: '0' },
  { label: 'man', value: '1' },
  { label: 'woman', value: '2' },
];

const checkboxOptions = [
  { label: 'labe-0', value: 0 },
  { label: 'labe-1', value: 1 },
  { label: 'labe-2', value: 2 },
];

describe('test Form comonent', () => {
  it('Form snapshot test', () => {
    const TestComponent = () => {
      const [form] = useForm();

      return (
        <FormPro labelwidth='100px' form={form}>
          <Field name='sex' label='性别'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='checkboxData' label='lebel'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <div>
            <Button>提交</Button>
          </div>
        </FormPro>
      );
    };

    const wrapper = render(<TestComponent />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it('submits the form and calls onFinishHandler', () => {
    const onFinishHandler = jest.fn();
    const onFinishFailedHandler = jest.fn();

    const { getByLabelText } = render(
      <FormPro onFinish={onFinishHandler} onFinishFailed={onFinishFailedHandler}>
        <Field name='sex' label='性别'>
          <RadioGroup
            options={[
              { label: 'Unknown', value: '0' },
              { label: 'man', value: '1' },
              { label: 'woman', value: '2' },
            ]}
          />
        </Field>
        <Field name='checkboxData' label='lebel'>
          <CheckboxGroup
            options={[
              { label: 'labe-0', value: 0 },
              { label: 'labe-1', value: 1 },
              { label: 'labe-2', value: 2 },
            ]}
          />
        </Field>
        <Field>
          <Button>提交</Button>
        </Field>
      </FormPro>
    );

    // Select radio button
    fireEvent.click(getByLabelText('man'));

    // Select first and second checkbox
    fireEvent.click(getByLabelText('labe-0'));
    fireEvent.click(getByLabelText('labe-1'));
  });
});
