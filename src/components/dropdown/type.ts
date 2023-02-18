import { ReactNode } from 'react';
export type DropdownOptions = {
  label: number | string;
  value: number | string;
};
type align = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
export interface DropdownProps {
  children: ReactNode;
  className?: string;
  options: DropdownOptions[];
  trigger?: string;
  arrow?: boolean;
  width?: string;
  maxHeight?: string;
  align?: align | undefined;
  placement?: string;
  handleClick?: (e: any) => void;
}
