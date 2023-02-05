import React, { memo } from 'react';
import classNames from 'classnames';
import { InputProps } from './type';

export const Input: React.FC<InputProps> = (props) => {
    const { className, size, showCount, type, readonly, niceCount,
        clearable, showPassword, modelValue, disabled, resize,
        align, placeholder, autoWidth, ...restProps } = props;

    const classesDiv = `
    mi-input-view-${size} 
    ${type == 'textarea' ? 'mi-input-view-textarea' : ''}
    ${readonly ? 'mi-input-view-readonly' : ''} 
    ${disabled ? 'mi-input-view-disabled' : ''}
    ${align ? 'mi-input-view-align-' + align : ''}
    ${autoWidth ? 'mi-input-view-auto-width' : ''}
    `
    const classes = classNames('mi-input-view', className, classesDiv);
    const classesTex = classNames('btf-scrollbar', `mi-textarea-resize-${resize}`);
    return (
        <div className={classes} {...restProps}>
            {type == 'textarea' ?
                <textarea className={classesTex}
                    rows={3}
                    cols={3}
                    disabled={disabled}
                    readOnly={readonly}
                    placeholder={placeholder}>
                </textarea> :
                <input type="text" disabled={disabled} placeholder={placeholder} />}
        </div>
    );
};

Input.defaultProps = {
    type: '',
    modelValue: '',
    size: 'medium',
    align: 'left',
    disabled: false,
    clearable: false,
    placeholder: '请输入',
    readonly: false,
    showPassword: false,
    showCount: false,
    niceCount: false,
    autoWidth: false,
    resize: 'none',
};

export default memo(Input);
