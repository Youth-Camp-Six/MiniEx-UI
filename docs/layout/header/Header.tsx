import React, { memo } from 'react';
import cls from './Header.module.less';
import { Link } from 'react-router-dom';
import { Button } from '../../../src';

const Header: React.FC = () => {
  return (
    <div className={cls.header}>
      <div className='left'>
        <div>MiniEx-UI</div>
      </div>
      <div className='right'>
        <Link to='/home'>
          <Button btnType='link'>首页</Button>
        </Link>
        <Link to='/doc'>
          <Button btnType='link'>文档</Button>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
