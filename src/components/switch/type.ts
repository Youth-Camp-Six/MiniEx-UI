export interface SwitchProps {
  modelvalue?: boolean;
  loading?: boolean;
  disabled?: boolean;
  request?: (e: any) => void;
  round?: boolean;
  className?: string;
}
