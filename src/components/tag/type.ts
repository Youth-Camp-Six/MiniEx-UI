import { ReactNode } from "react";

type sizeRules = 'small' | 'medium' | 'large';
type typeRules = 'primary' | 'info' | 'success' | 'error' | 'warning' | 'normal';
export interface TagProps {
    className?: string;
    size?: sizeRules;
    type?: typeRules;
    maxWidth?: string;
    round?: string;
    closable?: boolean;
    disabled?: string;
    to?: string;
    bold?: string;
    children: ReactNode;
    close?:()=>{void}
}