import React, { memo } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { DrawerProps, getStyle, getClass } from './type';

export const Drawer: React.FC<DrawerProps> = (props) => {
  const { className, children, width, height, position, visible, onClose, style, ...restProps } =
    props;

  const classes = classNames('mi-drawer', { 'mi-drawer-show': visible });
  const classesContent = classNames('mi-drawer-main', getClass(position as string), className);

  const originalWarn = console.warn;
  console.warn = function (message) {
    if (message.startsWith('Warning: findDOMNode is deprecated in StrictMode.')) {
      return;
    }
    originalWarn.apply(console, arguments);
  };

  return (
    <CSSTransition in={visible} timeout={300} classNames={position} unmountOnExit>
      <div className={classes} {...restProps} onClick={onClose} style={style}>
        <div
          style={getStyle(position as string, width as number, height as number)}
          className={classesContent}
          onClick={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
          }}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

Drawer.defaultProps = {
  visible: false,
  width: 30,
  height: 30,
  position: 'right',
};

export default memo(Drawer);
