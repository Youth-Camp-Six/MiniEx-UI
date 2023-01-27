import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { Title } from '../../../src';

interface IProps {
  children?: ReactNode;
}

const TitleDoc: React.FC<IProps> = () => {
  return (
    <div className='TitleDoc'>
      <h2>TitleDoc</h2>
      <div>--展示组件--</div>
      <Title size='s'>标题组件 s</Title>
      <Title size='l'>标题组件 l</Title>
      <Title size='m'>标题组件 m</Title>
      <Title size='xl'>标题组件 xl</Title>
      <Title size='xxl'>标题组件 xxl</Title>
      <div>--展示代码--</div>
    </div>
  );
};

export default memo(TitleDoc);
