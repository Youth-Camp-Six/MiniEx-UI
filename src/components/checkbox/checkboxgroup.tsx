import React, { memo } from 'react';
import classNames from 'classnames';
import { CheckboxGroupProps } from './type';
import { Flex } from '../flex';
import { Checkbox } from './index';

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
    const { className, size, modelValue, block, iconable, options,
        direction, ...restProps } = props;

    const classes = classNames('mi-checkbox', className, {
        [`lew-checkbox-group-${direction}`]: direction,
        [`lew-checkbox-group-${size}`]: size,
    });

    const getChecked = (_value: string | number) => {
        return modelValue.includes(_value);
    };
    return (
        <Flex x="start" gap={15} className={classes} {...restProps}>
            {options.map((item) => {
                return <Checkbox label={item.label}
                    key={item.value}
                    block={block}
                    iconable={iconable}
                    size={size}
                    checked={getChecked(item.value)}
                ></Checkbox>
            })}
        </Flex>
    );
};

CheckboxGroup.defaultProps = {
    modelValue: [],
    block: false,
    iconable: true,
    size: 'medium',
    direction: 'x',
    options: []
};

export default memo(CheckboxGroup);
