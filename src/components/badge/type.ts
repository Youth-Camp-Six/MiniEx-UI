import { ReactNode } from 'react';

type value = string | number | 'undefined';

type type = 'normal' | 'success' | 'error' | 'warning' | 'info';

export interface BadgeProps {
    className?: string;
    round?: string;
    value?: value;
    type?: type;
    children: ReactNode;
}
