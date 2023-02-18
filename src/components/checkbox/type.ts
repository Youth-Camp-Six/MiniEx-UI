import { ReactNode } from 'react';
export interface CheckboxProps {
  onChange?: (checked: boolean) => void;
  label: string;
  block?: boolean;
  iconable?: boolean;
  checked?: boolean;
  round?: boolean;
  size?: string;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
}

type Options = {
  label: string;
  value: string | number;
};
export interface CheckboxGroupProps {
  onChange?: (value: any) => void;
  value?: Array<string | number>;
  block?: boolean;
  iconable?: boolean;
  options: Options[];
  direction?: 'x' | 'y';
  size?: string;
  round?: boolean;
  children?: ReactNode;
  className?: string;
}
