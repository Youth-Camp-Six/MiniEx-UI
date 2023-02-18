export interface InputProps {
  className?: string;
  type?: string;
  modelValue?: string;
  size?: string;
  align?: string;
  disabled?: boolean;
  clearable?: boolean;
  placeholder?: string;
  readonly?: boolean;
  showPassword?: boolean;
  maxLength?: number;
  showCount?: boolean;
  niceCount?: boolean;
  autoWidth?: boolean;
  isFocus?: boolean;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  resize?: string;
}
