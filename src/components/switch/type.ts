export interface SwitchProps {
  modelValue?: boolean;
  loading?: boolean;
  disabled?: boolean;
  request?: (e: any) => void;
  change?: () => void;
  round?: boolean;
  className?: string;
}
