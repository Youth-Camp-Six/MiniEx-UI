import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { Button } from '../../../src';

interface IProps {
  children?: ReactNode;
}

const ButtonDoc: React.FC<IProps> = () => {
  return (
    <div className='ButtonDoc'>
      <h2>ButtonDoc</h2>
      <div>--展示组件--</div>
      <Button>按钮组件</Button>
      <div>--展示代码--</div>
    </div>
  );
};

export default memo(ButtonDoc);
