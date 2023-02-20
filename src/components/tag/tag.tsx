import React, { memo } from 'react';
import classNames from 'classnames';
import { TagProps } from './type';
import { MiIcon } from '../icon/icon';

export const Tag: React.FC<TagProps> = (props) => {
  const {
    className,
    size,
    type,
    maxWidth,
    disabled,
    to,
    bold,
    children,
    round,
    handleClick,
    closable,
    ...restProps
  } = props;

  const classes = classNames('mi-tag', className, {
    [`mi-tag-${size}`]: size,
    [`mi-tag-${type}`]: type,
    [`mi-tag-${round}`]: round,
    [`mi-tag-${bold}`]: bold,
    [`mi-tag-${disabled}`]: disabled,
    [`mi-tag-${to}`]: to,
  });

  const getSize = () => {
    switch (size) {
      case 'small':
        return '12';
      case 'medium':
        return '14';
      case 'large':
        return '16';
      default:
        return '14';
    }
  };
  return (
    <div className={classes} style={{ maxWidth: `${maxWidth}` }} {...restProps}>
      <div className='mi-tag-left'></div>
      <div className='mi-tag-value'>{children}</div>
      <div className='mi-tag-right'></div>
      <div className='mi-tag-close'>
        {closable ? <MiIcon.X size={getSize()} onClick={handleClick} /> : null}
      </div>
    </div>
  );
};

Tag.defaultProps = {
  size: 'medium',
  type: 'normal',
  maxWidth: '220px',
  round: '',
  closable: false,
  disabled: '',
  to: '',
  bold: '',
};

export default memo(Tag);
