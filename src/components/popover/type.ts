import { ReactNode } from 'react';

export interface PopoverProps {
  className?: string;
  trigger?: string;
  placement?: any;
  triggerTarget?: Element;
  arrow?: boolean;
  children: ReactNode;
  childrenData?: ReactNode;
}
