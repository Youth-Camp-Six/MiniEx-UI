import { ReactNode } from 'react';
type status = 'online' | 'processing' | 'away' | 'offline' | 'busy' | '';

export interface AvatarProps {
  className?: string;
  round?: string;
  status?: status;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  statusPosition?: string;
  icon?: ReactNode;
  style?: React.CSSProperties;
  children?: ReactNode;
}
type baseOptions = {
  label: string;
  value: string;
};
export type Options = AvatarProps & baseOptions;
export interface AvatarGroupProps {
  className?: string;
  maxCount?: number;
  maxPopoverPlacement?: 'top' | 'bottom';
  maxPopoverTrigger?: 'hover' | 'focus' | 'click';
  maxStyle?: React.CSSProperties;
  options: Options[];
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}
