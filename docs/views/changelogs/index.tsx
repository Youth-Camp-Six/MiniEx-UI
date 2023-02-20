import React, { memo } from 'react';

import CHANGELOG from '../../../CHANGELOG.md';
import cls from './index.module.less';

const Changelogs: React.FC = () => {
  return (
    <div className={cls.changelogsContainer}>
      <div>
        <CHANGELOG />
      </div>
    </div>
  );
};

export default memo(Changelogs);
