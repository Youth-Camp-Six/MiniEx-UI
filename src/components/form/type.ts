import { ReactNode } from 'react';
export interface FormProps {
  width?: string;
  label?: string;
  labelwidth?: string;
  labelalign?: string;
  direction?: string;
  children?: ReactNode;
  className?: string;
}
