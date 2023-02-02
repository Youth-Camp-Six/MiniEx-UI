type Options = {
  label: string;
  value: string;
};

export interface TabsProps {
  className?: string;
  modelValue?: string;
  options: Options[];
  width?: string;
  itemWidth?: string;
  round?: string;
  change?: (e: any) => void;
  type?: string;
}
