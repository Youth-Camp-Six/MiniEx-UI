import { ReactNode } from 'react';
export type SelectOptions = {
  label: string;
  value: string;
  disabled?: boolean;
};
type sizeRules = 'small' | 'medium' | 'large';
export interface selectProps {
  className?: string;
  modelValue?: [string, Array<string>];
  options: SelectOptions[];
  placement?: string;
  trigger?: string;
  multiple?: boolean;
  align?: string;
  showIcon?: boolean;
  labelSlot?: boolean;
  size?: sizeRules;
  header?: ReactNode;
  footer?: ReactNode;
  label?: ReactNode;
}
