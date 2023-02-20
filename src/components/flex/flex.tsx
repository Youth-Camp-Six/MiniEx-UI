import React, { memo } from 'react';
import classNames from 'classnames';
import { FlexProps } from './type';

export const Flex: React.FC<FlexProps> = (props) => {
  const { className, direction, x, y, wrap, mode, gap, width, children, ...restProps } = props;

  const classes = classNames('mi-flex', className, {
    [`mi-flex-${direction}`]: direction,
    [`mi-flex-x-${x}`]: x,
    [`mi-flex-y-${y}`]: y,
    ['mi-flex-wrap']: wrap,
    [`mi-flex-mode-${mode}`]: mode,
  });

  return (
    <div className={classes} style={{ gap: `${gap}px`, width: `${width}` }} {...restProps}>
      {children}
    </div>
  );
};

Flex.defaultProps = {
  direction: 'x',
  x: 'center',
  y: 'center',
  wrap: false,
  mode: '',
  gap: 10,
  width: '',
};

export default memo(Flex);
