import type { ReactNode } from 'react';
import type { Rules } from 'async-validator';

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

export interface FormRef {
  getFieldsValue: () => { [key: string]: any };
  getFieldValue: (key: string) => any;
  setFieldsValue: (newStore: { [key: string]: any }) => void;
  registerFieldEntities: (entity: any) => void;
  submit: () => Promise<{ [key: string]: any }>;
  setCallbacks: (callbacks: any) => void;
  subscribe: (cb: any) => void;
  setFormRules: (rules: Rules) => void;
  validate: () => Promise<any>;
}

export type IFormType = (form: any) => [value: FormRef];
