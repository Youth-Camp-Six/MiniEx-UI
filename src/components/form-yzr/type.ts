import type { ReactNode } from 'react';
import Field from './Field';
import useForm from './useForm';

export interface FormProps {
  children: ReactNode;
  form: any;
  onFinish: (values: any) => void;
  onFinishFailed: (values: any) => void;
}

export interface FormStaticProps {
  Field: typeof Field;
  useForm: typeof useForm;
}
