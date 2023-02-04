import React, { memo, useEffect } from 'react';
import classNames from 'classnames';
import { PopoverProps } from './type';
import tippy from 'tippy.js';
// tippy 样式
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/shift-away-subtle.css';
import 'tippy.js/themes/light.css';

export const Popover: React.FC<PopoverProps> = (props) => {
  const { className, placement, triggerTarget, arrow, children, childrenData, ...restProps } =
    props;
  let { trigger } = props;
  let instance: any;
  let bodyRef: any;
  let triggerRef: any;
  const classes = classNames('mi-popover', className);
  useEffect(() => {
    if (trigger == 'hover') {
      trigger = 'mouseenter';
    }
    instance = tippy(triggerRef, {
      theme: 'light',
      trigger: trigger,
      triggerTarget: triggerTarget,
      content: bodyRef,
      animation: 'shift-away-subtle',
      interactive: true,
      placement: placement,
      arrow: arrow,
      appendTo: () => document.body,
      allowHTML: true,
      maxWidth: 'none',
      onShow(instance) {
        const node = document.getElementsByTagName('html')[0];
        if (node.classList.contains('mi-dark')) {
          instance.popper.children[0].setAttribute('data-theme', 'dark');
        } else {
          instance.popper.children[0].setAttribute('data-theme', 'light');
        }
        // emit('onShow');
      },
      onHide() {
        // emit('onHide');
      },
    });

    instance.popper.children[0].setAttribute('data-mi', 'popover');
    //eslint-disable-next-line
  }, [])

  return (
    <div className={classes} {...restProps}>
      <label
        ref={(el) => {
          triggerRef = el;
        }}
      >
        <div className='trigger'>{children}</div>
      </label>
      <div
        ref={(el) => {
          bodyRef = el;
        }}
        className='mi-popover-body'
      >
        {childrenData}
      </div>
    </div>
  );
};

Popover.defaultProps = {
  trigger: 'click',
  placement: 'top',
  triggerTarget: undefined,
  arrow: true,
};

export default memo(Popover);
