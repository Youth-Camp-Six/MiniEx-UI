import type { ReactNode } from 'react';

type TitleSize = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface BaseTitleProps {
  size?: TitleSize;
  children?: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

// HTML元素的属性结合上自定义属性
type AllTitleProps = BaseTitleProps & React.HTMLAttributes<HTMLElement>;

// 将Button组件的所有属性转化为可选的
export type TitleProps = Partial<AllTitleProps>;
