import React, { memo } from 'react';
import classNames from 'classnames';
import { PopoverProps } from './type';
import Tippy from '@tippyjs/react';
// tippy 样式
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/shift-away-subtle.css';
import 'tippy.js/themes/light.css';

export const Popover: React.FC<PopoverProps> = (props) => {
  const { className, placement, arrow, children, childrenData, ...restProps } = props;
  let { trigger } = props;
  const classes = classNames('mi-popover', className);

  const content = <div className='mi-popover-body'>{childrenData}</div>;

  let triggerRef: any;
  if (trigger == 'hover') {
    trigger = 'mouseenter';
  }
  return (
    <Tippy
      content={content}
      interactive={true}
      trigger={trigger}
      placement={placement}
      triggerTarget={triggerRef}
      appendTo={() => document.body}
      arrow={arrow}
      theme='light'
    >
      <div className={classes} {...restProps}>
        <label
          ref={(el) => {
            triggerRef = el;
          }}
        >
          <div className='trigger'>{children}</div>
        </label>
      </div>
    </Tippy>
  );
};

Popover.defaultProps = {
  trigger: 'mouseenter',
  placement: 'top',
  arrow: true,
};

export default memo(Popover);
