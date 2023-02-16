import classNames from 'classnames';
import React, { memo, useEffect } from 'react';
import FieldContext from './field-context';
import { FieldProps } from './type';

export const Field: React.FC<FieldProps> = (props) => {
  const { getFieldValue, setFieldsValue, registerFieldEntities, ...restProviderProps } =
    React.useContext(FieldContext);

  const {
    children,
    name,
    className,
    label,
    labelwidth = restProviderProps.labelwidth,
    direction = restProviderProps.direction,
    labelalign = restProviderProps.labelalign,
    ...restProps
  } = props;

  const classes = classNames('mi-form-item', className, {
    [`mi-form-item-${direction}`]: direction,
    [`mi-form-item-${labelalign}`]: labelalign,
  });

  // 数据变化时更新组件
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  const [validateMessage, setValidateMessage] = React.useState<string>('');
  const [messageClassnames, setMessageClassnames] = React.useState<string>(
    'mi-form-item-view-message'
  );

  // 数据校验信息显示
  const onValidate = (msg: string) => {
    setValidateMessage(msg);
  };

  // 设置校验信息样式
  useEffect(() => {
    setMessageClassnames(
      classNames('mi-form-item-view-message', {
        'mi-form-item-view-message-error': validateMessage,
      })
    );
  }, [validateMessage]);

  // 组件生成时注册, 组件销毁时注销
  React.useLayoutEffect(() => {
    const unregister = registerFieldEntities({
      props,
      onStoreChange: forceUpdate,
      onValidate,
    });
    return unregister;
  }, []);

  // 劫持子组件的onChange事件, 修改value值
  const getControlled = () => {
    return {
      value: getFieldValue(name),
      onChange: (e: any) => {
        const newValue = e;
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  let returnChildNode: any;

  // 判断子组件是否为React元素, 类型限缩避免报错
  if (React.isValidElement(children)) {
    returnChildNode = React.cloneElement(children, getControlled());
  } else {
    throw new Error(
      'Field children component must receive a React element as its child element, field传入子组件必须接受一个React元素作为子元素'
    );
  }

  return (
    <div className={classes} {...restProps}>
      <div className='mi-form-item-label' style={{ width: labelwidth }}>
        {label}
      </div>
      <div className='mi-form-item-view'>
        <div className='mi-form-item-view-inner'>{returnChildNode}</div>
        <div className={messageClassnames}>{validateMessage}</div>
      </div>
    </div>
  );
};

export default memo(Field);
