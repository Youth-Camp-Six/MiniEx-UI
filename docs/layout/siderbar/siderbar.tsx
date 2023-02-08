import React, { memo, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Menu, MenuItem } from '../../../src';
import { useNavigate, useLocation } from 'react-router-dom';
import { IRouterConfig, ISiderbarConfig, ISiderbarItemConfig } from '../../views/doc/doc.type';
import { siderbarConfig } from './sidebar.config';

interface IProps {
  children?: ReactNode;
  config: ISiderbarConfig[];
}

const Siderbar: React.FC<IProps> = () => {
  const [menuConfig, setMenuConfig] = useState<IRouterConfig[]>([]);
  const location = useLocation();

  // 将有嵌套关系的siderbarConfig降维
  const flatSiderbarConfig = (config: ISiderbarItemConfig[]) => {
    const group = config.map((item) => {
      return [{ title: item.title, disabled: true }, ...item.children];
    });

    return group.flat();
  };

  useEffect(() => {
    setMenuConfig([]);
    if (location.pathname.indexOf('/zh/') >= 0) {
      setMenuConfig(flatSiderbarConfig(siderbarConfig.zh));
    } else {
      setMenuConfig(flatSiderbarConfig(siderbarConfig.us));
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
