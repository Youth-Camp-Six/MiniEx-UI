export interface SwitchProps {
  modelValue?: boolean;
  loading?: boolean;
  disabled?: boolean;
  request?: (e: any) => void;
  handleChange?: () => void;
  round?: boolean;
  className?: string;
}
