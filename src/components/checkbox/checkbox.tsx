import React, { memo } from 'react';
import classNames from 'classnames';
import { CheckboxProps } from './type';

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { className, size, round, block, iconable, disabled, checked,
        label, handleChange, updateModelValue, ...restProps } = props;
    const [_checked, set_checked] = React.useState(!checked);

    
    const classesLabel = `
        ${block ? 'mi--checkbox-block' : ''} 
        ${round ? 'mi-checkbox-round' : ''}
        ${_checked ? 'mi-checkbox-checked' : ''}
        ${size ? 'mi-checkbox-' + size : ''}
        ${!iconable ? 'mi-checkbox-unicon' : ''}
        `
    const classes = classNames('mi-checkbox',className, classesLabel);
    // React.useEffect(() => {

    //     if (checkRef.current?.checked !== _checked) {
    //         set_checked(!checkRef.current?.checked as boolean)
            
    //     }
          
    // }, [checkRef.current?.checked])
    const setChecked =  (e: Event) => {
        if (disabled) {
            return;
        }
        set_checked(!(e.target as HTMLInputElement).checked);
        handleChange(_checked);
    };
    return (
        <label className={classes} {...restProps}>
            {
                iconable ?
                    <div className="icon-checkbox-box">
                        <svg className="icon-checkbox" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="4"
                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div> : null
            }
            <input style={{ display: 'none' }} type="checkbox" defaultChecked={checked}  onChange={(e:Event)=>setChecked(e)} /> 
            {label ? <span className="mi-checkbox-label">{label}</span> : null}
        </label>
    );
};

Checkbox.defaultProps = {
    label: '',
    block: false,
    iconable: true,
    size: 'medium',
    round: false,
    disabled: false,
    checked: false,
};

export default memo(Checkbox);
