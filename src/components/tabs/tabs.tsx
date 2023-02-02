import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { TabsProps } from './type';

export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, modelValue, options, width, itemWidth, round, change, type, ...restProps } =
    props;

  const classes = classNames('mi-tabs', className, {
    [`mi-tabs-${type}`]: type,
    [`mi-badge-${round}`]: round,
  });

  const [activeWidth, setactiveWidth] = useState('');
  const [activetranslateX, setactivetranslateX] = useState('');
  const [v, setactiveV] = useState(modelValue);

  const itemRef = [] as any;

  const init = () => {
    let index = options.findIndex((e) => e.value == v);
    if (index < 0) {
      index = 0;
    }
    setactiveWidth(itemRef[index].offsetWidth);
    setactivetranslateX(itemRef[index].offsetLeft);
  };

  let curIndex = options.findIndex((e) => v == e.value);
  const setStyle = (value: string) => {
    const index = options.findIndex((e) => value == e.value);

    if (curIndex != index) {
      const _item = options[index];
      if (v != _item.value) {
        setactiveV(_item.value);
      }
      const activeRef = itemRef[index];
      setactiveWidth(activeRef.offsetWidth);
      setactivetranslateX(activeRef.offsetLeft);
      if (change && v != modelValue) {
        change({
          label: _item.label,
          value: _item.value,
          activeIndex: index,
        });
        // modelValue = v
      }
      curIndex = index;
    }
  };

  let timer: ReturnType<typeof setTimeout> | undefined;
  const debounce = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      init();
    }, 250);
  };

  useEffect(() => {
    if (modelValue == '') {
      setactiveV(options[0].value);
    }
    init();
    window.addEventListener('resize', debounce, false);
    //eslint-disable-next-line
    }, [])
  return (
    <div className={classes} style={{ width: `${width}` }} {...restProps}>
      <div
        className='mi-tabs-item-animation-active'
        style={{ width: `${activeWidth}px`, transform: `translateX(${activetranslateX}px)` }}
      ></div>
      {options.map((item) => {
        return (
          <div
            key={item.value}
            className={`mi-tabs-item ${v == item.value ? 'mi-tabs-item-active' : ''}`}
            style={{ width: `${itemWidth}` }}
            ref={(el) => {
              itemRef.push(el);
            }}
            onClick={() => {
              setStyle(item.value);
            }}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

Tabs.defaultProps = {
  modelValue: '',
  options: [],
  width: '',
  itemWidth: '',
  round: '',
  type: 'block',
};
export default memo(Tabs);
