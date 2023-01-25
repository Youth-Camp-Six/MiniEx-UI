import { ReactNode } from 'react';

type ButtonSize = 'lg' | 'sm';

type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
}

// HTML button元素的属性结合上自定义属性
type buttonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

// 将Button组件的所有属性转化为可选的
export type ButtonProps = Partial<buttonProps>;
