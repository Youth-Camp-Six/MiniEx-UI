import { ReactNode } from 'react';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
  children?: ReactNode;
}

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export interface IMenuContext {
  index: number;
  onSelect?: (selectedIndex: number) => void;
}
