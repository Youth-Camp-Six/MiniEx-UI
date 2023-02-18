/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { memo, useState } from 'react';
import type { ReactNode } from 'react';
import FormPro from '../../../../src/components/form-pro/formpro';
import Field from '../../../../src/components/form-pro/field';
import { RadioGroup, Button, CheckboxGroup } from '../../../../src/components';
import useForm from '../../../../src/components/form-pro/use-form';

interface IProps {
  children?: ReactNode;
}

export const FormProBase: React.FC<IProps> = () => {
  // init form
  const [form] = useForm();

  // handler on submit
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await form.submit();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const radioOptions = [
    { label: 'Unknown', value: '0' },
    { label: 'man', value: '1' },
    { label: 'woman', value: '2' },
  ];

  const checkboxOptions = [
    { label: 'beijing', value: 0 },
    { label: 'shanghai', value: 1 },
    { label: 'tianjin', value: 2 },
  ];

  return (
    <div className='FormDev'>
      <div>
        <FormPro form={form}>
          <Field name='sex' label='check sex'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='city' label='check cities'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <Field>
            <Button onClick={submitHandler}>submit</Button>
          </Field>
        </FormPro>
      </div>
    </div>
  );
};

export const FormProOneWayDataFlow: React.FC<IProps> = () => {
  // init form
  const [form] = useForm();

  // submit form and get field value
  form.subscribe((e) => {
    console.log('form changed', e);
  });

  // set form field value
  form.setFieldsValue({ sex: '1' });

  // get form fields value
  const fieldsValue = form.getFieldsValue();
  console.log('fieldsValue', fieldsValue);

  // get form field value
  const fieldValue = form.getFieldValue('sex');
  console.log('sex fieldValue', fieldValue);

  const radioOptions = [
    { label: 'Unknown', value: '0' },
    { label: 'man', value: '1' },
    { label: 'woman', value: '2' },
  ];

  const checkboxOptions = [
    { label: 'beijing', value: 0 },
    { label: 'shanghai', value: 1 },
    { label: 'tianjin', value: 2 },
  ];

  return (
    <div className='FormDev'>
      <div>
        <FormPro form={form}>
          <Field name='sex' label='check sex'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='city' label='check cities'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
        </FormPro>
      </div>
    </div>
  );
};

export const FormValidate: React.FC<IProps> = () => {
  const [form] = useForm();

  const rules = {
    sex: {
      required: true,
      message: 'sex is required',
    },
    city: [
      {
        required: true,
      },
      {
        validator: (rule, value) => {
          if (value?.length === 1) {
            return Promise.reject('checkboxData length must be greater than 1');
          }
          return Promise.resolve();
        },
      },
    ],
  };

  // validate the form successfully and submit callback
  const onFinishHandler = (e) => {
    console.log('onFinishHandler', e);
  };

  // failed to validate the form callback
  const onFinishFailedHandler = (e) => {
    console.log('onFinishFailedHandler', e);
  };

  // validate the form
  const validateHandler = async () => {
    try {
      const res = await form?.validate();
      console.log(res);
    } catch ({ errors, fields }) {
      console.log('validateHandler', errors, fields);
    }
  };

  const radioOptions = [
    { label: 'Unknown', value: '0' },
    { label: 'man', value: '1' },
    { label: 'woman', value: '2' },
  ];

  const checkboxOptions = [
    { label: 'beijing', value: 0 },
    { label: 'shanghai', value: 1 },
    { label: 'tianjin', value: 2 },
  ];

  return (
    <div className='FormDev'>
      <div>
        <FormPro
          form={form}
          rules={rules}
          labelwidth='100px'
          onFinish={onFinishHandler}
          onFinishFailed={onFinishFailedHandler}
        >
          <Field name='sex' label='check sex'>
            <RadioGroup options={radioOptions}></RadioGroup>
          </Field>
          <Field name='city' label='check cities'>
            <CheckboxGroup options={checkboxOptions}></CheckboxGroup>
          </Field>
          <Field>
            <Button>submit</Button>
          </Field>
        </FormPro>
        <br />
        <br />
        <Button btnType='link' onClick={validateHandler}>
          validate
        </Button>
      </div>
    </div>
  );
};
