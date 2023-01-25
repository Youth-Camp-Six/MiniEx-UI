import React, { memo } from 'react';
import Header from '../header/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import style from './Mian.module.less';

const Main: React.FC = () => {
  const location = useLocation();
  const nav = useNavigate();

  React.useEffect(() => {
    if (location.pathname == '/') {
      nav('/home');
    }
  }, [location]);

  return (
    <div className={style.main}>
      <Header />
      <Outlet />
    </div>
  );
};

export default memo(Main);
