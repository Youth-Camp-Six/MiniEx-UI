import { ReactNode } from 'react';
export type TableColumns = {
  title?: string;
  field?: string;
  sticky?: string;
  offsetX?: string;
  x?: 'center' | 'start' | 'end';
  y?: 'center' | 'start' | 'end';
  width?: string;
  columnStyle?: React.CSSProperties;
};

export interface tableProps {
  className?: string;
  style?: React.CSSProperties;
  columns?: TableColumns[];
  width?: string;
  maxHeight?: string;
  data?: Array<any>;
  cell: (field: any, row: any) => ReactNode;
}
