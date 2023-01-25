import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Button: React.FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className='Button'>
      <button>{children}</button>
    </div>
  );
};

export default memo(Button);
