import type { ReactNode } from 'react';
import Field from './field';
import useForm from './use-form';

export interface FormProps {
  children: ReactNode;
  form?: any;
  className?: string;
  width?: string;
  labelwidth?: string;
  direction?: 'x' | 'y';
  labelalign?: 'start' | 'end';
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
