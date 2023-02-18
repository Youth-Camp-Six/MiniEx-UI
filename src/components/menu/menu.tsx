import React, { createContext, memo, useState } from 'react';
import { IMenuContext, MenuProps } from './type';
import classNames from 'classnames';

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, style, onSelect, children } = props;

  const classes = classNames('menu', className);

  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActive(index);
    onSelect && onSelect(index);
  };

  const menuContext: IMenuContext = {
    index: currentActive ?? 0,
    onSelect: handleClick,
  };

  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
};

export default memo(Menu);
