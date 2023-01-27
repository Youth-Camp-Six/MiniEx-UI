import React, { memo } from 'react';
import type { ReactNode } from 'react';
import { Menu, MenuItem } from '../../../src';

interface IProps {
  children?: ReactNode;
}

const MenuDoc: React.FC<IProps> = () => {
  return (
    <div className='MenuDoc'>
      <h2>MenuDoc</h2>
      <div>--展示组件--</div>
      <Menu mode='horizontal'>
        <MenuItem index={1}>item1</MenuItem>
        <MenuItem index={2} disabled>
          item2
        </MenuItem>
        <MenuItem index={3}>item3</MenuItem>
      </Menu>
      <Menu mode='vertical'>
        <MenuItem index={1}>item1</MenuItem>
        <MenuItem index={2}>item2</MenuItem>
        <MenuItem index={3}>item3</MenuItem>
      </Menu>
      <div>--展示代码--</div>
    </div>
  );
};

export default memo(MenuDoc);
