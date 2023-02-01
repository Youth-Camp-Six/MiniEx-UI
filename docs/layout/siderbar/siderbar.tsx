import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, MenuItem } from '../../../src';
import { useNavigate, useLocation } from 'react-router-dom';
import { IRouterConfig, ISiderbarConfig } from '../../views/doc/doc.type';
import { siderbarConfig } from '../../views/doc/doc.config';

interface IProps {
  children?: ReactNode;
  config: ISiderbarConfig[];
}

const Siderbar: React.FC<IProps> = () => {
  const [menuConfig, setMenuConfig] = useState<IRouterConfig[]>([]);
  const location = useLocation();

  useEffect(() => {
    setMenuConfig([]);
    if (location.pathname.indexOf('/zh/') >= 0) {
      setMenuConfig([
        { title: siderbarConfig[1].title, disabled: true },
        ...siderbarConfig[1].children,
      ]);
    } else {
      setMenuConfig([
        { title: siderbarConfig[0].title, disabled: true },
        ...siderbarConfig[0].children,
      ]);
    }
  }, [location]);

  const navgate = useNavigate();

  const handleClick = (index: number) => {
    let lng: string;
    if (location.pathname.indexOf('/zh/') >= 0) {
      lng = '/zh';
    } else {
      lng = '/en';
    }
    navgate((lng + menuConfig[index].path) as string);
  };

  return (
    <div className='siderbar'>
      <Menu
        mode='vertical'
        defaultIndex={1}
        style={{ width: '220px' }}
        onSelect={(i) => handleClick(i)}
      >
        {menuConfig.map((item, index) => (
          <MenuItem disabled={item.disabled} index={index} key={index}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default memo(Siderbar);
