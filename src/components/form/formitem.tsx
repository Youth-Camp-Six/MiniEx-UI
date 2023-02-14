import React, { memo } from 'react';
import classNames from 'classnames';
import { FormProps } from './type';

export const FormItem: React.FC<FormProps> = (props) => {
  const { className, labelwidth, label, direction, labelalign, children, ...restProps } = props;

  // const _labelwidth = labelwidth || 'auto';
  // const _direction = direction || 'x';
  // const _labelalign = labelalign || 'end';

  const classes = classNames('mi-form-item', className, {
    [`mi-form-item-${direction}`]: direction,
    [`mi-form-item-${labelalign}`]: labelalign,
  });

  return (
    <div className={classes} {...restProps}>
      <div className='mi-form-item-label' style={{ width: `${labelwidth}` }}>
        {label}
      </div>
      <div className='mi-form-item-view'>{children}</div>
    </div>
  );
};

FormItem.defaultProps = {
  label: '标题',
  labelwidth: '',
  labelalign: '',
  direction: '',
};

export default memo(FormItem);
