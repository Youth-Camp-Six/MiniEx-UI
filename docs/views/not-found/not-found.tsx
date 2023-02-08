import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import notFound from '@/assets/404-not-found.png';

import cls from './not-found.module.less';

const NotFound: React.FC = () => {
  return (
    <div className={cls.content}>
      <img className={cls.empty} src={notFound} />
      <div>404 Not Found</div>
      <Link to='/'>
        <div className={cls.link}>回到首页</div>
      </Link>
    </div>
  );
};

export default memo(NotFound);
