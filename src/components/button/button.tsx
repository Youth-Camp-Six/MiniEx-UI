import React, { memo } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, disabled, size, btnType, children, ...restProps } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled,
  });

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default memo(Button);
