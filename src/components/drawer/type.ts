import { ReactNode } from 'react';

export interface DrawerProps {
  children: ReactNode;
  className?: string;
  width?: number;
  height?: number;
  position?: string;
  visible?: boolean;
  onClose: (e: any) => void;
  style?: React.CSSProperties;
}

export const getStyle = (position: string, width: number, height: number) => {
  switch (true) {
    case !position:
      return { width: '30%', height: '100%' };

    case position == 'left':
      return { width: `${width}%`, height: '100%' };

    case position == 'right':
      return { width: `${width}%`, height: '100%' };

    case position == 'top':
      return { width: '100%', height: `${height}%` };

    case position == 'bottom':
      return { width: '100%', height: `${height}%` };

    default:
      break;
  }
};

export const getPosition = (position: string) => {
  switch (position) {
    case 'left':
      return 0;
    case 'right':
      return 0;
    case 'top':
      return 1;
    case 'bottom':
      return 1;
    default:
      return 0;
  }
};

export const getClass = (position: string) => {
  return position ? 'mi-drawer-main-' + position : 'mi-drawer-main-right';
};
