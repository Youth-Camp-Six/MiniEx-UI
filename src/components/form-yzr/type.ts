import type { ReactNode } from 'react';
import { Field } from './field';
import useForm from './use-form';

export interface FormProps {
  children: ReactNode;
  form?: any;
  className?: string;
  width?: string;
  labelwidth?: string;
  direction?: 'x' | 'y';
  labelalign?: 'start' | 'end';
  rules?: any;
  onFinish?: (values: any) => void;
  onFinishFailed?: (values: any) => void;
}

export interface FieldProps {
  children: ReactNode;
  className?: string;
  name: string;
  label?: string;
  width?: string;
  labelwidth?: string;
  direction?: 'x' | 'y';
  labelalign?: 'start' | 'end';
}

export interface FormStaticProps {
  Field: typeof Field;
  useForm: typeof useForm;
}

export interface FormRef {
  getFieldsValue: any;
  getFieldValue: any;
  setFieldsValue: any;
  registerFieldEntities: any;
  submit: any;
  setCallbacks: any;
  subscribe: any;
  setFormRules: any;
  validate: any;
}

export type IFormType = (form: any) => [value: FormRef];
