import React, { memo } from 'react';
import { SelectOptions, selectProps } from './type';
import classNames from 'classnames';
import { Popover, MiIcon, Tag, Flex, Checkbox } from '../../index';

export const Select: React.FC<selectProps> = (props) => {
  const {
    className,
    // modelvalue,
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

  const labelStr = '';
  const multipleLabelStr: string[] = [];
  const classesView = classNames('mi-select-view', className);
  const classes = classNames('mi-select', `mi-select-${size} mi-select-align-${align}`);

  const MultipleBody = (arr: string[]) => {
    return (
      <Flex wrap gap={5} x={'start'} className='mi-isSelect-label-box'>
        {arr.map((item, index) => {
          return (
            <Tag key={index} type='primary' closable size={size}>
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

  // const [SelectRef,setSelectRef]=useState()
  let SelectRef: any;
  const SelectWidth = SelectRef?.offsetWidth - 12 + 'px';

  const SelectBody = (options: SelectOptions[]) => {
    return (
      <div className={classesSelectBody} style={{ width: SelectWidth }}>
        {header}
        <div className='mi-select-options-box'>
          {options.map((item) => {
            return (
              <div key={item.value}>
                <label>
                  {!labelSlot ? (
                    <div
                      className={`me-select-item ${item.disabled ? 'mi-select-item-disabled' : ''}`}
                    >
                      {showIcon && multiple ? (
                        <Checkbox
                          size={size}
                          label={item.label}
                          disabled={item.disabled}
                          className='mi-select-checkbox'
                        ></Checkbox>
                      ) : null}
                      {!multiple ? <div className='mi-select-label'>{item.label}</div> : null}
                    </div>
                  ) : (
                    <div className='mi-select-slot-item'>
                      {label}
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
              <Tag type='primary' size={size} closable={true}>
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
  modelvalue: [],
  options: [],
  placement: 'bottom-start',
  trigger: 'click',
  multiple: false,
  align: 'left',
  showIcon: true,
  labelSlot: false,
  size: 'medium',
};

export default memo(Select);
