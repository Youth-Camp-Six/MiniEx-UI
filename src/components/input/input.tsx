import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { InputProps } from './type';

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    size,
    type,
    readonly,
    onBlur,
    modelValue,
    disabled,
    resize,
    onFocus,
    onChange,
    align,
    placeholder,
    autoWidth,
    isFocus,
    ...restProps
  } = props;

  const classesDiv = `
    mi-input-view-${size}
    ${type == 'textarea' ? 'mi-input-view-textarea' : ''}
    ${readonly ? 'mi-input-view-readonly' : ''}
    ${disabled ? 'mi-input-view-disabled' : ''}
    ${align ? 'mi-input-view-align-' + align : ''}
    ${autoWidth ? 'mi-input-view-auto-width' : ''}
    `;
  const classes = classNames('mi-input-view', className, classesDiv);
  const classesTex = classNames('btf-scrollbar', `mi-textarea-resize-${resize}`);
  const [inputValue, setInputValue] = useState(modelValue);

  let lewTextareaRef;
  let lewInputRef;
  const focusFn = (e: boolean | undefined) => {
    if (e) {
      {
        if (type == 'textarea') {
          lewTextareaRef?.focus();
        } else {
          lewInputRef?.focus();
        }
      }
    }
  };
  useEffect(() => {
    focusFn(isFocus);
  });

  return (
    <div className={classes} {...restProps}>
      {type == 'textarea' ? (
        <textarea
          className={classesTex}
          ref={(el) => {
            lewTextareaRef = el;
          }}
          rows={3}
          cols={3}
          disabled={disabled}
          readOnly={readonly}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type='text'
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange && onChange(e.target.value);
          }}
          ref={(el) => {
            lewInputRef = el;
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {autoWidth ? <label className='input-auto-width'>{inputValue}</label> : null}
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
  isFocus: false,
  resize: 'none',
};

export default memo(Input);
