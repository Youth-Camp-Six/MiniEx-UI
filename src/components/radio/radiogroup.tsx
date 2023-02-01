import React, { memo } from 'react';
import classNames from 'classnames';
import { RadioGroupProps } from './type';
import { Flex } from '../flex';
import { Radio } from './index';

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
    const { className, size, modelValue, block, iconable, options,
        direction, ...restProps } = props;

    const classes = classNames('mi-radio', className, {
        [`lew-radio-group-${direction}`]: direction,
        [`lew-radio-group-${size}`]: size,
    });

    return (
        <Flex x="start" gap={15} className={classes} {...restProps}>
            {options.map((item) => {
                return <Radio label={item.label}
                    key={item.value}
                    block={block}
                    iconable={iconable}
                    size={size}
                    checked={modelValue == item.value}
                ></Radio>
            })}
        </Flex>
    );
};

RadioGroup.defaultProps = {
    modelValue: '',
    block: false,
    iconable: true,
    size: 'medium',
    direction: 'x',
    options: []
};

export default memo(RadioGroup);
