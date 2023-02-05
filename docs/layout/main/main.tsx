import React, { memo } from 'react';
import Header from '../header/header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import cls from './main.module.less';

const Main: React.FC = () => {
  const location = useLocation();
  const nav = useNavigate();

  React.useEffect(() => {
    if (location.pathname === '/en') {
      nav('/en/home');
    }
    if (location.pathname === '/zh') {
      nav('/zh/home');
    }
  }, [location]);

  return (
    <div className={cls.main}>
      <Header />
      <div className={cls.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Main);
