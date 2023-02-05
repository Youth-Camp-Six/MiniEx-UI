import { ReactNode } from 'react';

type FlexDirection = 'y' | 'x';
type x = 'center' | 'start' | 'end';
type y = 'center' | 'start' | 'end';
type FlexMode = '' | 'between ' | 'around';

export interface FlexProps {
    className?: string;
    direction?: FlexDirection;
    x?: x;
    y?: y;
    wrap?: Boolean;
    mode?: FlexMode;
    gap?: Number;
    width?: String;
    children: ReactNode;
}

