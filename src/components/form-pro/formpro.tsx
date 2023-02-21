import classNames from 'classnames';
import React, { memo } from 'react';
import FieldContext from './field-context';
import type { FormProps, FormRef } from './type';
import useForm from './use-form';

export const FormPro = React.forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    children,
    form,
    onFinish,
    onFinishFailed,
    className,
    width,
    direction = 'x',
    labelalign = 'end',
    labelwidth = '80px',
    rules,
    ...restProps
  } = props;

  const classes = classNames('mi-form', className);

  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

  formInstance.setFormRules(rules);

  const providerValue = {
    ...formInstance,
    direction,
    labelalign,
    labelwidth,
  };

  return (
    <form
      className={classes}
      style={{ width: `${width}` }}
      {...restProps}
      onSubmit={(e) => {
        e.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={providerValue}>{children}</FieldContext.Provider>
    </form>
  );
});

FormPro.displayName = 'FormPro';

export default memo(FormPro);
