import React, { memo } from 'react';
import classNames from 'classnames';
import { RadioProps } from './type';

export const Radio: React.FC<RadioProps> = (props) => {
    const { className, size, label, block, iconable, checked,
        direction, ...restProps } = props;

    const classesLabel = `
    ${block ? 'mi--radio-block' : ''} 
    ${checked ? 'mi-radio-checked' : ''}
    ${size ? 'mi-radio-' + size : ''}
    ${!iconable ? 'mi-radio-unicon' : ''}
    `
    const classes = classNames('mi-radio', className, classesLabel);

    return (
        <label className={classes} {...restProps}>
            {iconable ?
                <div className="icon-radio-box">
                    <div className="icon-radio"></div>
                </div> : null
            }
            <input type="radio" defaultChecked={checked} style={{ display: 'none' }} />
            {label ? <span className="mi-radio-label"> {label}</span> : null}
        </label>
    );
};

Radio.defaultProps = {
    block: false,
    iconable: true,
    size: 'medium',
};

export default memo(Radio);
