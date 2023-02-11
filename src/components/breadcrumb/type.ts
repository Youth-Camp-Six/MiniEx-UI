import { ReactNode } from 'react';
export type Options = {
  label: string | ReactNode;
  to: string;
  active?: boolean;
};

type iconType = 'sprit' | 'shoulder';
export interface breadcrumbProps {
  className?: string;
  options: Options[];
  iconType?: iconType;
  style?: React.CSSProperties;
}
