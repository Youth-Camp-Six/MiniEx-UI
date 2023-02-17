import React, { memo } from 'react';
import classNames from 'classnames';
import { BadgeProps } from './type';

export const Badge: React.FC<BadgeProps> = (props) => {
  const { className, children, round, type, value, ...restProps } = props;

  const classes = classNames('mi-badge', className, {
    [`mi-badge-${type}`]: type,
    [`mi-badge-${round}`]: round,
  });

  return (
    <div className={classes} {...restProps}>
      {value ? <div className='mi-badge-value'>{value}</div> : <div className='mi-badge-dot'></div>}
      {children}
    </div>
  );
};

Badge.defaultProps = {
  round: '',
  type: 'normal',
  value: '',
};

export default memo(Badge);
