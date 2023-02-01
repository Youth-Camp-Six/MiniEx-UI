import React, { memo } from 'react';
import classNames from 'classnames';
import { DropdownProps } from './type';

export const Dropdown: React.FC<DropdownProps> = (props) => {
    const { className, children, options, trigger, arrow, width, maxHeight, align, ...restProps } = props;

    const classes = classNames('mi-badge', className, {
        // [`mi-badge-${type}`]: type,
        // [`mi-badge-${round}`]: round,
    });

    return (
        <div>
            {children}
            <div></div>
        </div>
    );
};

Dropdown.defaultProps = {
    options: [],
    trigger: 'hover',
    arrow: true,
    width: '',
    maxHeight: '300px',
    align: 'left',
    placement: 'bottom'
};

export default memo(Dropdown);
