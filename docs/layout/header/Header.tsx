import React, { memo, useState } from 'react';
import cls from './Header.module.less';
import { Link } from 'react-router-dom';
import { Button } from '../../../src';

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState('light');

  const handleModule = () => {
    if (themeMode === 'light') {
      setThemeMode('mi-dark');
      document.body.classList.add('mi-dark');
    } else {
      setThemeMode('light');
      document.body.classList.remove('mi-dark');
    }
  };

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
        <Button onClick={handleModule}>{themeMode}</Button>
      </div>
    </div>
  );
};

export default memo(Header);
