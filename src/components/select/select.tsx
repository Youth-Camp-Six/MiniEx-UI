import React, { memo, useEffect,useRef,Ref } from 'react';
import { SelectOptions, selectProps } from './type';
import classNames from 'classnames';
import { Popover, MiIcon, Tag, Flex, Checkbox } from '../../index';
import { Value } from '../../../../dux-ui-react/src/components/Checkbox/interface';
// import  from 'react';

export const Select: React.FC<selectProps> = (props) => {
  const {
    className,
    modelValue,
    options,
    placement,
    trigger,
    multiple,
    align,
    showIcon,
    labelSlot,
    size,
    header,
    footer,
    label,
    ...restProps
  } = props;
  const [v, setV] = React.useState('');
  const [_modelValue,set_modelValue]=React.useState<[string, Array<string>]>(['',[]]);
  const [labelStr, setLabelStr] = React.useState('');
  const [multipleLabelStr, setMultipleLabelStr] = React.useState<Array<string>>([]);
  const [multipleV, setMultipleV] = React.useState<Array<string>>([]);
  const classesView = classNames('mi-select-view', className);
  const classes = classNames('mi-select', `mi-select-${size} mi-select-align-${align}`);


  let SelectRef: any;
  const SelectWidth = SelectRef?.offsetWidth - 12 + 'px';
  useEffect(
    () => {     
      set_modelValue(modelValue) 
      if (multiple && _modelValue instanceof Array) {
        setMultipleLabelStr(filterSelect(_modelValue as Array<string>, options))
      } else if (typeof _modelValue == 'string') {
        setLabelStr(options?.find((e) => e.value == _modelValue)?.label || '')
    }
    }, []);
  useEffect(
      () => {     
        // 如果是多选
        if (!_modelValue) {
              return;
          }
      if (multiple && _modelValue instanceof Array) {
            setMultipleV(_modelValue as Array<string>)
            setMultipleLabelStr(filterSelect(_modelValue as Array<string>, options))
            // console.log(multipleLabelStr);
      } else if (typeof _modelValue == 'string') {        
            setV(_modelValue)
            setLabelStr(options?.find((e) => e.value == _modelValue)?.label || '');     
          }
  }, [_modelValue]);

  const filterSelect = (v: string[], options: SelectOptions[]) => {
    let _v: Array<string> = [];
    if (v && options) {
        v.map((e: string) => {
            options.map((o) => {
                if (e == o.value) {
                    _v.push(o.label);
                }
            });
        });
    }
    return _v;
  };
  const check = (item: SelectOptions, isChecked: boolean) => {
    
    if (_modelValue instanceof Array) {
        let updatedValue = [..._modelValue];
        if (isChecked) {
            updatedValue.push(item.value);
        } else {
            updatedValue.splice(updatedValue.indexOf(item.value), 1);
      }
      set_modelValue(updatedValue as any)
    } else {
      if (v != item.value) {
        setLabelStr(item.label);
            // labelStr = item.label;
        setV(item.value)
            // v.value = item.value;
            // emit('change', item.value);
        }
      set_modelValue(item.value as any)
    }
  };
  const getChecked = (_value: string) => {
    return _modelValue?.includes(_value);
  };
  const delTag = (i: number) => {
    console.log(i);
    multipleV.splice(i, 1);
    setMultipleLabelStr(multipleLabelStr.splice(i, 1));
    set_modelValue(multipleV as any)
    console.log(_modelValue);
};
  const MultipleBody = (arr: string[]) => {
    return (
      <Flex wrap gap={5} x={'start'} className='mi-isSelect-label-box'>
        {arr.map((item, index) => {
          return (
            <Tag key={index} type='primary' closable close={()=>delTag(index)} size={size}>
              {item}
            </Tag>
          );
        })}
      </Flex>
    );
  };

  const classesSelectBody = classNames(
    'mi-select-body',
    `${size ? 'mi-select-body-' + size : ''} ${multiple ? 'mi-select-multiple-body' : ''} ${
      align ? 'mi-select-body-align-' + align : ''
    } `
  );

  const SelectBody = (options: SelectOptions[]) => {
    return (
      <div className={classesSelectBody} style={{ width: SelectWidth }}>
        {header}
        <div className='mi-select-options-box'>
          {options.map((item) => {
            // const i = 0;
            return (
              <div key={item.value} >
                <label  >
                  {!labelSlot ? (
                    <div 
                      className={`mi-select-item  ${item.disabled ? 'mi-select-item-disabled' : ''}`}
                    >
                      <Checkbox
                        size={size}
                        label={item.label}
                        disabled={item.disabled}
                        className={`mi-select-checkbox ${showIcon && multiple ? '' : 'mi-select-checkbox-none'} `}
                        checked={getChecked(item.value)}
                        handleChange={(e: Event) => check(item, e)
                        }
                      ></Checkbox>
                      <div className='mi-select-label'>{item.label}</div>
                    </div>
                  ) : (
                      <div className='mi-select-slot-item'>
                        {label}
                        {/* {slots['label']} */}
                      {/* <Checkbox label='' ></Checkbox> */}
                    </div>
                  )}
                </label>
              </div>
            );
          })}
        </div>
        {footer}
      </div>
    );
  };

  return (
    <Popover
      className={classesView}
      trigger={trigger}
      arrow={false}
      placement={placement}
      {...restProps}
      childrenData={SelectBody(options)}
    >
      <div
        className={classes}
        ref={(el) => {
          SelectRef = el;
        }}
      >
        <MiIcon.ChevronDown size='16px' className='mi-select-icon'></MiIcon.ChevronDown>
        {(!multiple && labelStr.length == 0) || (multiple && multipleLabelStr.length == 0) ? (
          <div className='mi-select-placeholder'>请选择</div>
        ) : null}
        {/* 单选 or 多选*/}
        {!multiple ? (
          <div className='mi-select-label-single'>{labelStr}</div>
        ) : (
          <div className='mi-select-label-multiple'>
            {multipleLabelStr.length > 0 ? (
              <Tag type='primary' size={size} closable={true} close={()=>delTag(0)}>
                {multipleLabelStr[0]}
              </Tag>
            ) : null}
            {multipleLabelStr.length > 1 ? (
              <Popover
                trigger='hover'
                placement='top'
                childrenData={MultipleBody(multipleLabelStr)}
              >
                <div style={{ marginLeft: '5px' }} className='mi-isSelect-label-num'>
                  {multipleLabelStr.length > 1 ? (
                    <Tag type='primary' size={size}>
                      +{multipleLabelStr.length - 1}
                    </Tag>
                  ) : null}
                </div>
              </Popover>
            ) : null}
          </div>
        )}
      </div>
    </Popover>
  );
};

Select.defaultProps = {
  modelValue: "",
  options: [],
  placement: 'bottom-start',
  trigger: 'click',
  multiple: false,
  align: 'left',
  showIcon: false,
  labelSlot: false,
  size: 'medium',
};

export default memo(Select);
