import React, { memo } from 'react';
import { Outlet, Link } from 'react-router-dom';

import cls from './Doc.module.less';

const Doc: React.FC = () => {
  return (
    <div className={cls.doc}>
      {/* 侧边栏 */}
      <div className={cls.siderbar}>
        <div>
          <Link to='/doc/button'>button</Link>
        </div>
        <div>
          <Link to='/doc/text'>text</Link>
        </div>
      </div>
      {/* 组件展示 */}
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Doc);
