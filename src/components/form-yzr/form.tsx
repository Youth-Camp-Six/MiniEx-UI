import classNames from 'classnames';
import React, { ReactNode } from 'react';
import FieldContext from './field-context';
import { FormProps } from './type';
import useForm from './use-form';

export const Form = React.forwardRef<any, FormProps>((props, ref) => {
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
    ...restProps
  } = props;

  const classes = classNames('mi-form', className);

  const [formInstance] = useForm(form);

  React.useImperativeHandle(ref, () => formInstance);

  formInstance.setCallbacks({
    onFinish,
    onFinishFailed,
  });

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

Form.displayName = 'Form';

export default Form;
