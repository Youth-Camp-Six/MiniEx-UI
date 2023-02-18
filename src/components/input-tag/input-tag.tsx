import React, { memo, useState } from 'react';
import { InputTagProps } from './type';
import { Tag } from '../tag';
import { Input } from '../input';
import { MiIcon } from '../icon/icon';
export const InputTag: React.FC<InputTagProps> = (props) => {
  const { type, modelvalue, ...restProps } = props;
  const [inputValue, setInputValue] = useState('');
  const [isInput, setIsInput] = useState(false);
  const [tagsValue, setTagsValue] = useState(modelvalue);

  const delTag = (index: number) => {
    tagsValue?.splice(index, 1);
    tagsValue && setTagsValue([...tagsValue]);
  };

  const addTag = () => {
    if (inputValue) {
      tagsValue?.push(inputValue);
      setTagsValue(tagsValue);
    }
    setInputValue('');
  };

  const blurFn = () => {
    setIsInput(false);
    document.onkeydown = null;
    addTag();
  };

  const openInput = () => {
    setIsInput(true);
  };

  return (
    <div className='mi-input-tag-view' {...restProps}>
      <div style={{ marginLeft: '-10px', height: '26px' }}></div>
      {tagsValue?.map((item, index) => {
        return (
          <Tag
            key={index}
            closable={true}
            type={type}
            handleClick={() => {
              delTag(index);
            }}
          >
            {item}
          </Tag>
        );
      })}
      {!isInput ? (
        <label className='mi-input-tag-button' onClick={openInput}>
          <MiIcon.Plus size='16'></MiIcon.Plus>
        </label>
      ) : null}
      {isInput ? (
        <Input
          className='mi-input-tag'
          isFocus
          onChange={(e) => {
            setInputValue(e);
          }}
          onFocus={addTag}
          onBlur={blurFn}
          size='small'
          autoWidth
          placeholder=''
        ></Input>
      ) : null}
    </div>
  );
};

InputTag.defaultProps = {
  type: 'normal',
  modelvalue: ['美丽', '大方'],
};

export default memo(InputTag);
