import React, { memo } from 'react';
import { InputTagProps } from './type';
import { Tag } from '../tag';
import { Input } from '../input';
import { MiIcon } from '../icon/icon';
export const InputTag: React.FC<InputTagProps> = (props) => {
    const { type, modelValue, ...restProps } = props;
    let isInput = false;
    return (
        <div className="mi-input-tag-view" {...restProps}>
            <div style={{ marginLeft: '-10px', height: '26px' }}></div>
            {modelValue?.map((item, index) => {
                return <Tag key={index} closable={true} type={type}>{item}</Tag>
            })}
            {!isInput ? <label className="mi-input-tag-button">
                <MiIcon.Plus size="16" ></MiIcon.Plus>
            </label> : null}
            {isInput ? <Input className="mi-input-tag"
                size="small"
                auto-width
                placeholder=""
            ></Input> : null}
        </div>
    );
};

InputTag.defaultProps = {
    type: 'normal',
    modelValue: [],
};

export default memo(InputTag);
