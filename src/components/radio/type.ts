import { ReactNode } from 'react';
export interface RadioProps {
  label: string;
  block?: boolean;
  iconable?: boolean;
  checked?: boolean;
  direction?: string;
  size?: string;
  children?: ReactNode;
  className?: string;
}

type Options = {
  label: string;
  value: string;
};
export interface RadioGroupProps {
  modelvalue?: string;
  block?: boolean;
  iconable?: boolean;
  options: Options[];
  direction?: string;
  size?: string;
  children?: ReactNode;
  className?: string;
}
