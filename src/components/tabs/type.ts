type Options = {
    label: string;
    value: string;
};

export interface TabsProps {
    className?: string;
    modelValue?: string;
    options: Options[];
    width?: String;
    itemWidth?: String;
    round?: String;
    type?: string
}