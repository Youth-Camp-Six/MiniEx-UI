import React, { memo } from 'react';
import classNames from 'classnames';
import { TitleProps } from './type';

const sizeMap = {
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '24px',
  xxl: '32px',
  xxxl: '40px',
};

export const Title: React.FC<TitleProps> = (props) => {
  const { className, size = 'm', children, style, ...restProps } = props;

  const classes = classNames('mi-title', className);

  const styles = {
    fontSize: sizeMap[size],
    ...style,
  };

  return (
    <h1 className={classes} style={styles} {...restProps}>
      {children}
    </h1>
  );
};

export default memo(Title);
