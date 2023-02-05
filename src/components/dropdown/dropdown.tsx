import React, { memo } from 'react';
import { DropdownProps, DropdownOptions } from './type';
import { Popover } from '../popover';

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    className,
    children,
    options,
    trigger,
    arrow,
    width,
    maxHeight,
    align,
    placement,
    ...restProps
  } = props;

  const DropdownBody = (arr: DropdownOptions[]) => {
    return (
      <div className='mi-dropdown-body' style={{ width: `${width}`, maxHeight: `${maxHeight}` }}>
        {arr.map((item, index) => {
          return (
            <div key={index} className='mi-dropdown-option' style={{ textAlign: align }}>
              {item.label}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Popover
      className={className}
      trigger={trigger}
      arrow={arrow}
      placement={placement}
      {...restProps}
      childrenData={DropdownBody(options)}
    >
      {children}
    </Popover>
  );
};

Dropdown.defaultProps = {
  options: [],
  trigger: 'hover',
  arrow: true,
  width: '',
  maxHeight: '300px',
  align: 'left',
  placement: 'bottom',
};

export default memo(Dropdown);
