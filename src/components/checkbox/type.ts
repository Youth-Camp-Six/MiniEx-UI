import { ReactNode } from "react";
export interface CheckboxProps {
    label: string;
    block?: boolean;
    iconable?: boolean;
    checked?: boolean;
    round?: boolean;
    size?: string;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
}

type Options = {
    label: string;
    value: string | number;
};
export interface CheckboxGroupProps {
    modelValue: Array<any>;
    block?: boolean;
    iconable?: boolean;
    options: Options[];
    direction?: string;
    size?: string;
    round?: boolean;
    children?: ReactNode;
    className?: string
}