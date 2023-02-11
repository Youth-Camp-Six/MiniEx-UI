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
  onChange: () => void;
  key: string;
}

type Options = {
  label: string;
  value: string;
};
export interface RadioGroupProps {
  value?: string | number;
  block?: boolean;
  iconable?: boolean;
  options: Options[];
  direction?: string;
  size?: string;
  children?: ReactNode;
  className?: string;
  onChange?: (e: string | number) => void;
}
