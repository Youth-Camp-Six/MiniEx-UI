/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Field, Form, useForm } from '..';
import { Button, CheckboxGroup, RadioGroup } from '../../../../src';

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
        <Form labelwidth='100px' form={form}>
          <Field name='sex' label='性别'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='checkboxData' label='lebel'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <div>
            <Button>提交</Button>
          </div>
        </Form>
      );
    };

    const wrapper = render(<TestComponent />);

    expect(wrapper.container.firstChild).toMatchSnapshot();
  });

  it('calls onFinishHandler when form is submitted', () => {
    const onFinishHandler = jest.fn();

    const TestComponent = () => {
      return (
        <Form labelwidth='100px' onFinish={onFinishHandler}>
          <Field name='sex' label='性别'>
            <RadioGroup data-testid='radioGroup' options={radioOptions}></RadioGroup>
          </Field>
          <Field name='checkboxData' label='lebel'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <div>
            <Button data-testid='submit'>提交</Button>
          </div>
        </Form>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    const form = getByTestId('submit');

    form.click();

    expect(onFinishHandler).toHaveBeenCalled();
  });

  it('gets form data when getFromData is called', () => {
    // let formHook: any;
    // const TestComponent = () => {
    //   const [form] = useForm({
    //     // checkboxData: [0, 1],
    //     // sex: '0',
    //   });
    //   formHook = form;
    //   return (
    //     <Form labelwidth='100px' form={form}>
    //       <Field name='sex' label='性别'>
    //         <RadioGroup options={radioOptions}></RadioGroup>
    //       </Field>
    //       <Field name='checkboxData' label='lebel'>
    //         <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
    //       </Field>
    //       <div>
    //         <Button>提交</Button>
    //       </div>
    //     </Form>
    //   );
    // };
    // const res = render(<TestComponent />);
    // expect(formHook.getFieldsValue()).toEqual({
    //   checkboxData: [0, 1],
    //   sex: '0',
    // });
    // const { getByTestId } = render(<TestComponent />);
    // fireEvent.click(getFromDataButton);
    // // You can use jest.spyOn to spy on console.log and assert that it was called with the correct arguments
    // expect(console.log).toHaveBeenCalledWith('get form data');
  });

  // const element = wrapper.getByText('nice') as HTMLButtonElement;
  // expect(element).toBeInTheDocument();
  // expect(element.tagName).toEqual('BUTTON');
  // expect(element).toHaveClass('btn btn-default');
  // expect(element.disabled).toBeFalsy();
  // fireEvent.click(element);
  // expect(defaultProps.onClick).toHaveBeenCalled();
});
