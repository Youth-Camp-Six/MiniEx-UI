import React, { memo } from 'react';
import cls from './Header.module.less';
import { Link } from 'react-router-dom';
// import { Button } from '../../../packages';

const Header: React.FC = () => {
  return (
    <div className={cls.Header}>
      <div className='left'>
        <div>MiniEx-UI</div>
      </div>
      <div className='right'>
        <Link to='/home'>
          {/* <Button btnType='link'>首页</Button> */}
          <button>首页</button>
        </Link>
        <Link to='/doc'>
          {/* <Button btnType='link'>文档</Button> */}
          <button>文档</button>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
