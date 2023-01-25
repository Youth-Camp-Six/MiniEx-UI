import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const ButtonDoc: React.FC<IProps> = () => {
  return (
    <div className='ButtonDoc'>
      <h2>textDoc</h2>
      <div>--展示组件--</div>
      <div>--展示代码--</div>
    </div>
  );
};

export default memo(ButtonDoc);
