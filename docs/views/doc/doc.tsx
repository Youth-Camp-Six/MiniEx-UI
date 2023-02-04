import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Siderbar from '../../layout/siderbar/siderbar';
import { siderbarConfig } from './doc.config';
import cls from './doc.module.less';

const Doc: React.FC = () => {
  return (
    <div className={cls.doc}>
      {/* 侧边栏 */}
      <div className={cls.siderbar}>
        <Siderbar config={siderbarConfig} />
      </div>
      {/* 组件展示 */}
      <div className={cls.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Doc);
