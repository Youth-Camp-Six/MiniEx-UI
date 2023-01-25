import React, { memo } from 'react';
import Header from '../header/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import cls from './Main.module.less';

const Main: React.FC = () => {
  const location = useLocation();
  const nav = useNavigate();

  React.useEffect(() => {
    if (location.pathname == '/') {
      nav('/home');
    }
  }, [location]);

  return (
    <div className={cls.main}>
      <Header />
      <Outlet />
    </div>
  );
};

export default memo(Main);
