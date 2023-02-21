/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { memo, useState } from 'react';
import type { ReactNode } from 'react';
import Form from '../../../../src/components/form-pro/formpro';
import Field from '../../../../src/components/form-pro/field';
import { RadioGroup, Button, CheckboxGroup } from '../../../../src/components';
import useForm from '../../../../src/components/form-pro/use-form';

interface IProps {
  children?: ReactNode;
}

export const FormProBase: React.FC<IProps> = () => {
  const [form] = useForm();

  form.subscribe((e) => {
    console.log(e);
  });

  // const submitHandler = () => {
  //   form
  //     .submit()
  //     .then((res) => {
  //       console.log('res', res);
  //     })
  //     .catch((err) => {
  //       console.log('err', err);
  //     });
  // };

  const submitHandler = async (e) => {
    console.log(e);

    try {
      const res = await form.submit();
      console.log(res);
    } catch (err) {
      // console.log(err);
    }
  };

  const setFormRulesHandler = (rule) => {
    form.setFormRules(rule);
  };

  const [radioOptions, setRadioOptions] = useState([
    { label: 'Unknown', value: '0' },
    { label: 'man', value: '1' },
    { label: 'woman', value: '2' },
  ]);

  const [checkboxOptions, setCheckboxOptions] = useState([
    { label: 'labe-0', value: 0 },
    { label: 'labe-1', value: 1 },
    { label: 'labe-2', value: 2 },
  ]);

  return (
    <div className='FormDev'>
      <div>
        <Form form={form} labelwidth='100px'>
          <Field name='sex' label='性别'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='checkboxData' label='lebel'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <div>
            <Button onClick={submitHandler}>提交</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
