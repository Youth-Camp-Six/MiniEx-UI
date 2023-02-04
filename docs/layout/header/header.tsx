import React, { memo, useState } from 'react';
import cls from './header.module.less';
import { Link } from 'react-router-dom';
import { Button } from '../../../src';
import myImg from '../../assets/logo.png';

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
        <div className={cls.logo}>
          <img src={myImg} alt='' style={{ width: '30px', height: '30px' }} />
          <span style={{ marginLeft: '10px' }}> MiniEx UI</span>
        </div>
      </div>
      <div className='right'>
        <Link to='/home'>
          <Button btnType='link'>首页</Button>
        </Link>
        <Link to='/doc/button'>
          <Button btnType='link'>文档</Button>
        </Link>
        <Button onClick={handleModule}>{themeMode}</Button>
      </div>
    </div>
  );
};

export default memo(Header);
