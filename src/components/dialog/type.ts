import { ReactNode } from 'react';

export interface DialogProps {
  className?: string;
  content: ReactNode;
  title: ReactNode;
  type?: string;
  layout?: string;
  visible?: boolean;
  onClose: (e: any) => void;
  style?: React.CSSProperties;
  ok?: (e: any) => void;
  cancel?: (e: any) => void;
}
