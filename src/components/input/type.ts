import { ReactNode } from "react";
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
    maxLength?: Number;
    showCount?: boolean;
    niceCount?: boolean;
    autoWidth?: boolean;
    resize?: string;
}
