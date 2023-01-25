import React, { memo } from 'react';
import style from './Doc.module.less';
import { Outlet, Link } from 'react-router-dom';

const Doc: React.FC = () => {
  return (
    <div className={style.doc}>
      {/* 侧边栏 */}
      <div className={style.siderbar}>
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
