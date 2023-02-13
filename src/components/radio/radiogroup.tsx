import React, { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { RadioGroupProps } from './type';
import { Flex } from '../flex';
import { Radio } from './index';

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { className, size, value, iconable, options, direction, onChange, ...restProps } = props;

  const classes = classNames('mi-radio', className, {
    [`lew-radio-group-${direction}`]: direction,
    [`lew-radio-group-${size}`]: size,
  });

  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  function handleChange(key: string | number) {
    setSelectedValue(key);
    onChange && onChange(key);
  }

  return (
    <Flex x='start' gap={15} className={classes} {...restProps}>
      {options.map((item) => (
        <Radio
          label={item.label}
          key={item.value}
          iconable={iconable}
          size={size}
          checked={selectedValue == item.value}
          onChange={() => handleChange(item.value)}
          data-testid={`radio-${item.value}`}
        ></Radio>
      ))}
    </Flex>
  );
};

RadioGroup.defaultProps = {
  iconable: true,
  size: 'medium',
  direction: 'x',
  options: [],
};

export default memo(RadioGroup);
