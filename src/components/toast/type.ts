export type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export type TypeOptions = 'info' | 'success' | 'warn' | 'error' | 'default';

export type Theme = 'light' | 'dark';

export interface ToastProps {
  title: string;
  message: string;
  onClose?: () => void;
  timeout?: number;
  pauseOnHover?: boolean;
  position?: ToastPosition;
  style?: TypeOptions;
  theme?: Theme;
}
