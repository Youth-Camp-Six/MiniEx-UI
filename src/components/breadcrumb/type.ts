import { ReactNode } from 'react';
export type BreadcrumbOptions = {
  label: string | ReactNode;
  to: string;
  active?: boolean;
};

type iconType = 'sprit' | 'shoulder';
export interface breadcrumbProps {
  className?: string;
  options: BreadcrumbOptions[];
  iconType?: iconType;
  style?: React.CSSProperties;
}
