import { ReactNode } from "react";
export type DropdownOptions = {
    label: number | string;
    value: number | string;
};

export interface DropdownProps {
    children: ReactNode;
    className?: string;
    options: DropdownOptions[];
    trigger?: string;
    arrow?: Boolean;
    width?: string;
    maxHeight?: string;
    align?: string;
    placement?: string;
}
