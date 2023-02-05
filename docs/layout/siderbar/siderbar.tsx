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
    const menuZN: IRouterConfig[] = [],
      menuUS: IRouterConfig[] = [];
    for (let i = 0; i < siderbarConfig.length; i++) {
      if (i % 2) {
        menuZN.push({ title: siderbarConfig[i].title, disabled: true });
        menuZN.push(...siderbarConfig[i].children);
      } else {
        menuUS.push({ title: siderbarConfig[i].title, disabled: true });
        menuUS.push(...siderbarConfig[i].children);
      }
    }
    if (location.pathname.indexOf('/zh/') >= 0) {
      setMenuConfig(menuZN);
    } else {
      setMenuConfig(menuUS);
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
