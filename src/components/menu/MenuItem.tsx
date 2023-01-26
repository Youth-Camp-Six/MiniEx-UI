import React, { memo } from 'react';
import { MenuItemProps } from './type';
import classNames from 'classnames';
import { MenuContext } from './Menu';

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;

  const { index: currentActive, onSelect } = React.useContext(MenuContext);

  const handleClick = () => {
    if (onSelect && !disabled && typeof index === 'number') {
      onSelect(index);
    }
  };

  const classes = classNames('menu-item', className, {
    'is-active': currentActive === index && !disabled,
    'is-disabled': disabled,
  });

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

export default memo(MenuItem);
