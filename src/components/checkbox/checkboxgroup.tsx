import React, { memo, useState } from 'react';
import classNames from 'classnames';
import { CheckboxGroupProps } from './type';
import { Flex } from '../flex';
import { Checkbox } from './index';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const {
    className,
    size,
    value = [],
    block,
    iconable,
    options,
    direction,
    onChange,
    round,
    ...restProps
  } = props;

  const classes = classNames('mi-checkbox', className, {
    [`mi-checkbox-group-${direction}`]: direction,
    [`mi-checkbox-group-${size}`]: size,
  });

  const [checkBoxValue, setCheckBoxValue] = useState(value);

  const checkBoxChange = (checked: boolean, key: string | number) => {
    if (checked) {
      // 当前item已选择
      setCheckBoxValue([...checkBoxValue, key]);
    } else {
      // 当前item未选择
      const index = checkBoxValue?.findIndex((item) => item === key);
      if (index !== undefined) {
        setCheckBoxValue([...checkBoxValue.slice(0, index), ...checkBoxValue.slice(index + 1)]);
      }
    }

    onChange?.(checkBoxValue);
  };
  return (
    <Flex x='start' direction={direction} gap={15} className={classes} {...restProps}>
      {options.map((item) => {
        return (
          <Checkbox
            label={item.label}
            key={item.value}
            block={block}
            round={round}
            iconable={iconable}
            size={size}
            checked={checkBoxValue.includes(item.value)}
            onChange={(checked) => {
              checkBoxChange(checked, item.value);
            }}
          ></Checkbox>
        );
      })}
    </Flex>
  );
};

CheckboxGroup.defaultProps = {
  value: [],
  block: false,
  iconable: true,
  size: 'medium',
  direction: 'x',
  options: [],
};

export default memo(CheckboxGroup);
