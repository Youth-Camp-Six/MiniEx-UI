import { ReactNode } from 'react';
export interface CheckboxProps {
  label: string;
  block?: boolean;
  iconable?: boolean;
  checked?: boolean;
  round?: boolean;
  size?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  handleChange: (e: any) => void;
  updateModelValue: (e: any) => void;
}

type Options = {
  label: string;
  value: string | number;
};
export interface CheckboxGroupProps {
  modelvalue?: Array<any>;
  block?: boolean;
  iconable?: boolean;
  options: Options[];
  direction?: string;
  size?: string;
  round?: boolean;
  children?: ReactNode;
  className?: string;
}
