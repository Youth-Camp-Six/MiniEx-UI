import React, { memo } from 'react';
import cls from './not-found.module.less';

const NotFound: React.FC = () => {
  return (
    <div className={cls.content}>
      <div>404</div>
      <div>不存在此页面</div>
    </div>
  );
};

export default memo(NotFound);
